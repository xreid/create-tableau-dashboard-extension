// This is a simple node.js Express server you can use to host your extension outside of development.
// Learn more about Express and extra customization and routing you can add to this file here: https://expressjs.com
// Run 'yarn run start' from the root directory of this project to start
const express = require('express');
const app = express();

app.use(express.static('src'));

const port = 9000;
app.listen(port);
