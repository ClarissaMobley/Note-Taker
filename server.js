const express = require("express");
const path = require('path');
const routes = require("./routes")
const app = express();

// Establish port
const PORT = process.env.PORT || 3001;

// Set Static Folder
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
