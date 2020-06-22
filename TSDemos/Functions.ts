// Function statements
function testFun(){

}
function Course(name,duration){
    this.name = name;
    this.duration = duration;
}

var c = new Course("abc",45);

// Function Expressions

let sum = function(n1:number, n2:number):number{
    return n1 + n2;
}

// Arrow Functions
let add = (n1:number,n2:number=0):number => n1 +  n2;
// All mandatory arguments should be place before default

add(2,3);
add(4);
