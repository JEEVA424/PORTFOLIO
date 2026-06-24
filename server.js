const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully");
});

// Sample API Route
app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Portfolio Website",
      description: "MERN Stack Portfolio Project"
    },
    {
      id: 2,
      title: "Weather App",
      description: "React Weather Application"
    }
  ]);
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});