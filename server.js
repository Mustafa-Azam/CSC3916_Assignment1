const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Echo endpoint
app.post("/echo", (req, res) => {
  const { message } = req.body;

  // Basic validation
  if (!message) {
    return res.status(400).json({
      error: "No message provided"
    });
  }

  // Echo back the same string
  res.json({
    echoedMessage: message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Echo server running on http://localhost:${PORT}`);
});