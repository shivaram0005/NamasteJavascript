// getName();
// console.log(x);  this gives undefined
// console.log(getName);

var x = 7;
function getName(){
    console.log("namaste javascript")
} 

//if we access getName arrow function it gives an error
var getName = () => {
    console.log("namaste Javascript")
}


//if we access getName a function it gives an error
var getName2 = function(){
    console.log("namaste javascript");
}
// getName();
// console.log(x);
// console.log(getName);
