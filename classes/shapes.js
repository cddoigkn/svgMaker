
// get Shapes class going
class Shape {
  constructor(shape, shapeColor){
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape{
  constructor(shape, shapeColor){
    super(shape,shapeColor)
  }
  render = () => {
    
    return `<circle cx="152" cy="110" r="60" fill="${this.shapeColor}" />`
  }
}

class Triangle extends Shape{
  constructor(shape, shapeColor){
    super(shape,shapeColor)
  }
  render = () => {
    
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
  }
}

class Square extends Shape{
  constructor(shape, shapeColor){
    super(shape,shapeColor)
  }
  render = () => {
    
    return `<rect x="77" y="35" width="150" height="150" fill="${this.shapeColor}" />`
  }
}

// export shapes constructor so that shapes can be used in other files
module.exports = {Shape, Circle, Triangle, Square};
