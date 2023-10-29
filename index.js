// requires inquirer in order to run said program //
const inquirer = require("inquirer")
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
    })
}

function makeSvg(responses) {
  shape.render
}



// function validateLength() {
//   if string.length > 3
// }

startQuestions()