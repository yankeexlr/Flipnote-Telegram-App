const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3003;

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

module.exports = app;