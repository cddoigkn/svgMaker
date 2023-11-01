// requires inquirer in order to run said program //
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./classes/shapes");
// while in node, has the user answer a few questions so that it can generate an image accordingly
const questions = [
  // has user enter 3 characters for their logo
  {
    type: "input",
    name: "name",
    message: "Enter up to 3 characters, please!"
  },
  // has user enter a color/hexadecimal number for the text's color
  {
    type: "input",
    name: "textColor",
    message: "Please enter a color keyword (or hexadecimal number) for the text!"
  },
  // has user choose one of three shapes
  {
    type: "list",
    name: "shape",
    message: "Please choose a shape!",
    choices: [ "Circle", "Triangle", "Square" ]
  },
  // has user choose a color for the shape itself
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter a color keyword (or hexadecimal number) for the shape!"
  },
]

function startQuestions (){
  inquirer.prompt(questions)
  .then ((responses)=>{
    console.log(responses)
    console.log(makeSvg(responses))
  })
}

function makeSvg(responses) {
  let newShape
  if (responses.shape === "Triangle"){
    newShape = new Triangle(responses.shape, responses.shapeColor)
  }
  else if
  (responses.shape === "Circle"){
    newShape = new Circle(responses.shape, responses.shapeColor)
  }
  else if
  (responses.shape === "Square"){
    newShape = new Square(responses.shape, responses.shapeColor)
  }
  return newShape.render()

}



// function validateLength() {
//   if string.length > 3
// }

startQuestions()
