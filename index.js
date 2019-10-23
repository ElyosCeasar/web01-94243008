const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (request, response) => {
  response.send("hello wold");
});

app.get("/gis/testpoint", (request, response) => {
  response.send("hello wold");
});

app.put("/gis/addpolygon", (request, response) => {
  response.send("hello wold");
});

app.listen(port, () => {
  console.log("listening on port 3000");
});
