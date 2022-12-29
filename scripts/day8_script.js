// Task 1
var rectanglesArray = [];
var result_paragraph = document.getElementById("result");

function Rectangle(_length, _width)
{
    this.length = Number(_length);
    this.width = Number(_width);
    Rectangle.prototype.numberOfInstances ++;
}
Rectangle.prototype.numberOfInstances = 0;
Rectangle.prototype.calc_area = function (){  
    return this.length * this.width;
};
Rectangle.prototype.calc_perimeter = function (){
    return 2 * (this.length + this.width);
};
Rectangle.prototype.toString = function(){
    return "Length is "+this.length+", Width is "+this.width+", Perimeter is "+this.calc_perimeter()+", Area is "+this.calc_area();
};
document.getElementById("calc-btn").addEventListener("click", ()=>{
    var length_value = document.getElementsByName("length")[0].value;
    var width_value = document.getElementsByName("width")[0].value;

    var newRectangle = new Rectangle(length_value, width_value);
    rectanglesArray.push(newRectangle);
    
    result_paragraph.innerText = "Perimeter is " + newRectangle.calc_perimeter() + ", Area is " + newRectangle.calc_area();
});
document.getElementById("runToString-btn").addEventListener("click", ()=>{
    result_paragraph.innerText = rectanglesArray[rectanglesArray.length-1].toString();
});
document.getElementById("viewInstances-btn").addEventListener("click", ()=>{
    result_paragraph.innerText = "Number of Instances is " +Rectangle.prototype.numberOfInstances;
});