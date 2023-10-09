var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

const tele = window.Telegram.WebApp;

var activeNote = {};

var getNotes = function() {
  return $.ajax({
    url: "/api/notes"  ,
    method: "GET"
  });
};

var saveNote = function(note) {
  return $.ajax({
    url: "/api/notes/",
    data: {note: note, user_data: tele.initData},
    method: "POST"
  });
};

function openNote() {
  document.getElementById('list').style.display = 'none';
  document.getElementById('note').style.display = 'block';
  document.getElementById('title').value = '';
  document.getElementById('text').value = '';
}

function openMenu() {
  document.getElementById('note').style.display = 'none';
  document.getElementById('list').style.display = 'block';
}

var renderActiveNote = function() {
  

  if (activeNote.id) {
    $noteTitle.attr("readonly", false);
    $noteText.attr("readonly", false);
    $noteTitle.val(activeNote.title);
    $noteText.val(activeNote.text);
  }
};

var handleNoteSave = function() {
  var newNote = {
    title: $noteTitle.val(),
    text: $noteText.val(),
  };

  saveNote(newNote).then(function(data) {
    getAndRenderNotes();
    renderActiveNote();
  });
};

var handleNoteView = function() {
  activeNote = $(this).data();
  renderActiveNote();
};

var handleNewNoteView = function() {
  activeNote = {};
  renderActiveNote();
};

var handleRenderSaveBtn = function() {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

var renderNoteList = function(notes) {
  $noteList.empty();

  var noteListItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $div = $("<div class='list-group-item note-card'>").data(note);
    var $spanTitle = $("<div class='note-title'>").text(note.title);
    var $spanPreview = $("<div class='note-preview'>").text(note.text);
    $div.append($spanTitle, $spanPreview);
    noteListItems.push($div);
  }

  $noteList.append(noteListItems);
};

var getAndRenderNotes = function() {
  return getNotes().then(function(data) {
    renderNoteList(data.reverse());
  });
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);

getAndRenderNotes();