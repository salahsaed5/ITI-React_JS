function math(){
// var circle_radius = parseInt(prompt("Enter Radius of The Circle :",0));
// var circle_area = Math.PI * Math.pow(circle_radius,2);
// console.log("Area of the circle ="+circle_area);
// alert("Area of the circle ="+ circle_area);

// var num =parseInt(prompt("Enter Number To calculate its Square root :",0));
// var sqr_root = Math.sqrt(num,2);
// document.write(sqr_root);
// alert ('Square Root Of '+ num +' is '  +sqr_root );



var anggle = parseInt (prompt("Enter Your Angle to calculate its cos",0));
var rad = anggle*(Math.PI /180) ;
var cos_value = Math.cos(rad);
cos_value = cos_value.toFixed(4);
console.log(cos_value)
alert ("Cosine value for "+anggle+" degrees is "   +cos_value );
document.write('<p>Cos',anggle , "is", cos_value,"<p>")


}
math();