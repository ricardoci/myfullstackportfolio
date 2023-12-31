const express = require("express");
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the PDF file
app.get('/FullStackResume.pdf', (req, res) => {
  const filePath = path.join(__dirname, 'FullStackResume.pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="FullStackResume.pdf"');
  res.setHeader('Content-Type', 'application/pdf');
  res.sendFile(filePath);
});

// Serve the index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001; // Use the provided port by Heroku or default to 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
