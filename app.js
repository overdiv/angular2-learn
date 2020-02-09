const express = require('express');
const {join} = require('path');

const app = express();

app.use(express.static(join(__dirname, 'dist/router-ex')));
app.get('/*', function(req, res) {
	res.sendFile(join(__dirname, 'dist/router-ex', 'index.html'));
});

app.listen(3000);