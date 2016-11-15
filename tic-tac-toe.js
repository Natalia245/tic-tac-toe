
var namespace = "http://www.w3.org/2000/svg"

function firstcircle() {
   var Shape = document.createElementNS(namespace, "circle")
   var canvas = document.getElementById("game-board")
   Shape.setAttribute("cx", 40)
   Shape.setAttribute("cy", 50)
   Shape.setAttribute("r", 30)
   Shape.setAttribute("fill", "green")
   canvas.appendChild(Shape)
}

function secondcircle() {
  var Shapetwo = document.createElementNS(namespace, "circle")
  var canvas = document.getElementId("topmiddle")
  Shapetwo.setAttribute("cx", 40)
  Shapetwo.setAttribute("cy", 50)
  Shapetwo.setAttribute("r", "green")
  canvas.appendChild(Shapetwo)
}
