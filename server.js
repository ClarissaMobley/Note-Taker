const express = require('express');
const app = express();
const path = require('path');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/apiRoutes', require('./routes/apiRoutes'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));