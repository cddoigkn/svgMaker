const {Square, Triangle, Circle} = require("./shapes");
// test was requiring \" in order to pass solution
// regardless of ` being used in standard shapes.js file
describe("Shapes", () => {
  it("should make a circle",() => {
    const Shapes = new Circle("Circle", "blue")
    expect(Shapes.render()).toEqual("<circle cx=\"152\" cy=\"110\" r=\"60\" fill=\"blue\" />");
  })
  it("should make a square",() => {
    const Shapes = new Square("Square", "blue")
    expect(Shapes.render()).toEqual("<rect x=\"77\" y=\"35\" width=\"150\" height=\"150\" fill=\"blue\" />");
  })
  it("should make a triangle",() => {
    const Shapes = new Triangle("Triangle", "blue")
    expect(Shapes.render()).toEqual("<polygon points=\"150, 18 244, 182 56, 182\" fill=\"blue\" />");
  })
})