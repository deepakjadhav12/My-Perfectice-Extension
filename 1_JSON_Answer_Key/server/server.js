require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let dataStore = {};

app.post("/storeData", (req, res) => {
  const id = Date.now().toString();
  dataStore[id] = req.body;
  res.json({ id });
});

app.get("/getData/:id", (req, res) => {
  const id = req.params.id;
  if (dataStore[id]) {
    res.json(dataStore[id]);
  } else {
    res.status(404).send("Data not found");
  }
});

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
