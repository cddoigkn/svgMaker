// requires inquirer in order to run said program //
const inquirer = require("inquirer");
const fs = require("fs");
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
  if (validateLength(responses.name)){
    const svg = makeSvg(responses)
    writeToFile("logo.svg", svg)
    console.log("Generated logo.svg")
  }
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
  const newSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${newShape.render()}
  <text x="150" y="125" font-size="40" text-anchor="middle" fill="${responses.textColor}">${responses.name}</text>

</svg>`
return newSvg
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if( error ) console.log("!")
  })
}


function validateLength(string) {
  if (string.length <= 3)
  {return true
}
  else 
  console.log("3 characters or less, please!")
}

startQuestions()
