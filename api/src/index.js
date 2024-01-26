const express = require("express");
// const cors = require("cors");
const app = express();
const port = process?.env?.PORT || 3000
const bodyParse = require('body-parser')

app.use(bodyParse())
app.use(express.json());
//remove cors in docker contanier add proxy in packjson  "proxy": "http://localhost:4200",

// app.use(cors());
const routes = require("./routes");

app.use(routes)


app.listen(port, () => {
  console.log(`Api running at ::${port}`);
});
