
var namespace = "http://www.w3.org/2000/svg"

function firstcircle() {
   var Shape = document.createElementNS(namespace, "circle")
   var canvas = document.getElementById("game-board")
   Shape.setAttribute("cx", 45)
   Shape.setAttribute("cy", 50)
   Shape.setAttribute("r", 30)
   Shape.setAttribute("fill", "green")
   canvas.appendChild(Shape)
}

function secondcircle() {
  var Shapetwo = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  Shapetwo.setAttribute("cx", 136)
  Shapetwo.setAttribute("cy", 50)
  Shapetwo.setAttribute("r", 30)
  Shapetwo.setAttribute("fill", "green")
  canvas.appendChild(Shapetwo)
}

function thirdcircle() {
  var Shapethree = document.createElementNS(namespace, "circle")
  var canvas = document.getElementById("game-board")
  Shapethree.setAttribute("cx", 225)
  Shapethree.setAttribute("cy", 50)
  Shapethree.setAttribute("r", 30)
  Shapethree.setAttribute("fill", "green")
  canvas.appendChild(Shapethree)
}

function fourthcircle() {

}
