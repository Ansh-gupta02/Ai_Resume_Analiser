const express = require('express');
const cors = require('cors');
const uploadRoute = require('./routes/upload'); // Ensure this path is correct

const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('Uploads folder created');
}

const app = express();
app.use(cors());
app.use(express.json());

// Define a root route to respond to GET requests at '/'
app.get('/', (req, res) => {
  res.send('Welcome to the Resume Upload API');
});

// Use the upload route
app.use('/api/upload', uploadRoute);

// Start the server
app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
