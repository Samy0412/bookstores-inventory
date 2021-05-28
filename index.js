const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const router = require("./routes")

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(router)

app.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
