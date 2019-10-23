//imports and system initial
const express = require("express");
var bodyParser = require("body-parser");
var inside = require("point-in-polygon");
const fs = require("fs");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
//local variables
let allPolygons = [];

//--------------------------------------------------
//APIs

//get
app.get("/", (request, response) => {
  response.send("hello world");
});
app.get("/gis/testpoint/:lat/:long", (request, response) => {
  // response.send(`lat : ${request.params.lat} , long : ${request.params.long}`);
  const polygons = [];
  allPolygons.forEach(element => {
    if (
      inside(
        [parseFloat(request.params.lat), parseFloat(request.params.long)],
        element.geometry.coordinates[0]
      )
    ) {
      polygons.push(element.properties.name);
    }
  });
  response.send({ polygons: polygons });
});

//put
app.put("/gis/addpolygon", (request, response) => {
  allPolygons.push(request.body);
  response.send(allPolygons);
});

//--------------------------------------------------
function systemInitial() {
  fs.readFile("sample-data.json", (err, data) => {
    if (err) throw err;
    let sample = JSON.parse(data);
    allPolygons = sample.features;
    console.log("ok");
  });
}
//server run
app.listen(port, () => {
  systemInitial();
  console.log(`server is listening on ${port} .... `);
});
