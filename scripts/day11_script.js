class Shape {
    constructor(){
        this.perimeter = 0;
         this.area = 0;
    };
    calculate_perimeter(){};
    calculate_area(){};
    toString(){
        this.calculate_perimeter();
        this.calculate_area();
        console.log(`Perimeter: ${this.perimeter}, Area: ${this.area}`);
    }
}
export class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super();
        this.length = length;
        this.width = width;
    }
    calculate_perimeter(){
        this.perimeter = (this.length + this.width) * 2;
    }
    calculate_area(){
        this.area = this.length * this.width;
    } 
}
export class Square extends Shape {
    constructor(side_length = 0){
        super();
        this.side_length = side_length;
    }
    calculate_perimeter(){
        this.perimeter = this.side_length * 4;
    }
    calculate_area(){
        this.area = this.side_length * this.side_length;
    } 
}
export class Circle extends Shape {
    constructor(radius = 0){
        super();
        this.radius = radius;
    }
    calculate_perimeter(){
        this.perimeter = 2 * Math.PI * this.radius;
    }
    calculate_area(){
        this.area = Math.PI * Math.pow(this.radius , 2);
    } 
}
