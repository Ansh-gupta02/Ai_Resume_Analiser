const express = require('express');
const cors = require('cors');
require('dotenv').config(); // 🔁 Move this to the top

const app = express();
const PORT = process.env.PORT || 4000; // ✅ Only declare once

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: "Server is working 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

