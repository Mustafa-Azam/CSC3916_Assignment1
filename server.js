const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Read raw body as text for ANY content-type
app.use(express.text({ type: "*/*" }));

app.post("/", (req, res) => {
  const contentType = req.get('Content-Type') || 'text/plain';
  res.set('Content-Type', contentType);
  const body = req.body && req.body.length > 0 ? req.body : '';
  res.send(body);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Echo server listening on port ${PORT}`);
  });
}