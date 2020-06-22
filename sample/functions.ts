//function statements
function testfun(){

}
function course(name,duration){
    this.name=name;
    this.duration=duration;
}

var c=new course("abc",45);

//function expressions
let sum1 = function(n1:number,n2:number):number{
    return n1+n2;
    
}
//arrow functions
let sum=(n1:number,n2:number):number =>{
    return n1+n2;
}
//or(arrow function for single line body)
let add=(n1:number,n2:number=0):number =>n1+n2; //incase of single line body
//all mandatory arguments should be placed bfr default
add(4);