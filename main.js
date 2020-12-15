$(document).ready(function () {
  "use strict";
  console.log("main.js loaded");

  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));
  //   for (var x = 25; x < 400; x += 50) {
  //     for (var y = 25; y < 400; y += 50) {
  //       c = Shape.Circle(x, y, 20);
  //       c.fillColor = "green";
  //     }
  //   }
  var tool = new Tool();
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.justification = "center";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "hello world";
  tool.onMouseDown = function (event) {
    let d = Shape.Circle(event.point, 20);
    d.fillColor = "green";
  };
  paper.view.draw();
});
