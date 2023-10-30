// export shapes constructor so that shapes can be used in other files
module.exports = {Shape};
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
    
    '<shape points="150, 18 244, 182 56, 182" fill="blue" />'
  }
}

class Triangle extends Shape{
  constructor(shape, shapeColor){
    super(shape,shapeColor)
  }
  render = () => {
    
    '<shape points="150, 18 244, 182 56, 182" fill="blue" />'
  }
}

class Square extends Shape{
  constructor(shape, shapeColor){
    super(shape,shapeColor)
  }
  render = () => {
    
    '<shape points="150, 18 244, 182 56, 182" fill="blue" />'
  }
}