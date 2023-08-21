var name = prompt("Enter Your Name");
var telp = prompt("Enter Your telephone number");
var mob = prompt("Enter Your Mobile Number");
var email = prompt("Enter Your Email");
var address = prompt("Enter Your Address");
var color = prompt("Enter Your Color (red,blue,green)");

var regEx1 = /^[a-zA-Z]+$/;
var regEx2 =/^[0-9]{8}$/;
var regEx3 =/^(010|011|012)\d{8}$/;
var regEx4 = /^[a-zA-z0-9]+@[a-zA-z0-9]+[.][a-zA-z0-9]+$/g ;

if(regEx1.test(name)== true)

    console.log("%cWelcome dear guest:","color:"+color,name);
    
    else
    alert("Please Enter a valid name");

    
if(regEx2.test(telp)== true)

    console.log("%cyour phone number is:","color:"+color,telp);
    
    else
    alert("Please Enter a valid telphone");


if(regEx3.test(mob)== true)

    console.log("%cyour mobile number is:","color:"+color,mob);
    
    else
    alert("Please Enter a valid mobile number");

if(regEx4.test(email)== true)

    console.log("%cyour Email is:","color:"+color,email);
    
    else
    alert("Please Enter a valid email");


    
