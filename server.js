const express = require("express");

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// Parse plain text bodies (only for text/plain)
app.use(express.text({ type: "text/plain" }));

app.post("/echo", (req, res) => {
  // If body is plain text
  if (typeof req.body === "string") {
    return res.status(200).send(req.body);
  }

  // If body is JSON and contains a message field
  if (req.body && typeof req.body.message === "string") {
    return res.status(200).send(req.body.message);
  }

  // Invalid or unsupported body
  return res.status(400).json({
    error: "Send either text/plain body or JSON with a 'message' field"
  });
});

app.listen(PORT, () => {
  console.log(`Echo server running on http://localhost:${PORT}`);
});