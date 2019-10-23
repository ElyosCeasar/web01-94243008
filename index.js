//imports and system initial
const express = require("express");
var inside = require("point-in-polygon");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;
//local variables
let polygons = [
  {
    type: "Feature",
    properties: {
      stroke: "#555555",
      "stroke-width": 2,
      "stroke-opacity": 1,
      fill: "#555555",
      "fill-opacity": 0.5,
      name: "سمنان"
    },
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [52.2894287109375, 35.387930399448095],
          [52.20977783203124, 35.40808023595146],
          [52.12188720703125, 35.475209977972064],
          [51.943359375, 35.556808973844596],
          [51.862335205078125, 35.576916524038616],
          [51.8115234375, 35.380092992092145],
          [51.82388305664062, 35.290468565908775],
          [51.998291015625, 35.122155106436956],
          [52.35397338867187, 35.1614594458557],
          [52.47482299804687, 35.28710571680812],
          [52.2894287109375, 35.387930399448095]
        ]
      ]
    }
  }
];

//--------------------------------------------------
//APIs

app.get("/", (request, response) => {
  response.send("hello world");
});
app.get("/gis/testpoint/:lat/:long", (request, response) => {
  // response.send(`lat : ${request.params.lat} , long : ${request.params.long}`);
  const res = [];
  polygons.forEach(element => {
    if (
      true
      // inside(
      //   [request.params.lat, request.params.long],
      //   element.geometry.coordinates
      // )
    ) {
      res.push(element.properties.name);
    }
  });
  response.send(res);
});
app.put("/gis/addpolygon", (request, response) => {
  response.send("hello wold");
});

//--------------------------------------------------
function systemInitial() {
  fs.readFile("sample-data.json", (err, data) => {
    if (err) throw err;
    let sample = JSON.parse(data);
    polygons = sample.features;
    console.log("ok");
  });
}
//server run
app.listen(port, () => {
  systemInitial();
  console.log(`server is listening on ${port} .... `);
});
