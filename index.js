class Polygon {
    constructor(ar) {
        this.ar = ar;
    }
    get countSides() {
        return this.ar.length 
    }
    get perimeter() {
        const reducer = (t, el) => t + el;
        return this.ar.reduce(reducer)
    }
}
class Triangle extends Polygon {
    get isValid() {
        if ((this.ar[0] + this.ar[1] > this.ar[2]) && (this.ar[1] + this.ar[2] > this.ar[0]) && (this.ar[2] + this.ar[0] > this.ar[1])) {
            return true
        } else { 
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let checkSides = this.ar.map((el) => {
            if (this.ar[0] === el) {
                return true
            } else {
                return false
            }
        })
        let checkTrue = checkSides.every(function (e) {
            return e === true;
        });
        return checkTrue
    }
    get area() {
        return this.ar[0] * this.ar[1]

    }
}


// let triangle = new Triangle( [ 5, 5, 5 ] ).isValid
// let triangle2 = new Triangle( [ 15, 10, 1 ] ).isValid

let square = new Square( [ 5, 5, 5, 5 ] ).isValid
let square2 = new Square( [ 5, 4, 3, 2 ] ).isValid


console.log(square)
console.log(square2)

