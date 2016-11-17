
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
var Shapefour = document.createElementNS(namespace, "circle")
var canvas = document.getElementById("game-board")
Shapefour.setAttribute("cx", 45)
Shapefour.setAttribute("cy", 140)
Shapefour.setAttribute("r", 30)
Shapefour.setAttribute("fill", "green")
canvas.appendChild(Shapefour)
}

function fifthcircle() {
var Shapefive = document.createElementNS(namespace, "circle")
var canvas = document.getElementById("game-board")
Shapefive.setAttribute("cx", 45)
Shapefive.setAttribute("cy", 225)
Shapefive.setAttribute("r", 30)
Shapefive.setAttribute("fill", "green")
canvas.appendChild(Shapefive)
}

function sixthcircle() {
var Shapesix = document.createElementNS(namespace, "circle")
var canvas = document.getElementById("game-board")
Shapesix.setAttribute("cx", 135)
Shapesix.setAttribute("cy", 140)
Shapesix.setAttribute("r", 30)
Shapesix.setAttribute("fill", "green")
canvas.appendChild(Shapesix)
}

function seventhcircle() {
var Shapeseven = document.createElementNS(namespace, "circle")
var canvas = document.getElementById("game-board")
Shapeseven.setAttribute("cx", 225)
Shapeseven.setAttribute("cy", 225)
Shapeseven.setAttribute("r", 30)
Shapeseven.setAttribute("fill", "green")
canvas.appendChild(Shapeseven)
}
