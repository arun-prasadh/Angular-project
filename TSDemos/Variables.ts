// Variable declarations

let data: number = 10;
//data = "abc";

let isValed:boolean = true;
isValed = false;

let someData: any = "abc";
someData = 123;

let result = "123"; // type of the first assigned value will type of the variable
result = "abc";

let mylist: number[] = [11, 22,33,44];
let names: string[] = ["abc", "aaa", "123"];

//Enumerator

enum Color {Red, Blue, Green};
let c:Color = Color.Blue;

//Functions

function myFunction(values:number[]):void{

}
function testFun(a:number =0,b:string):string{
    return a + b;
}

// Variable Declarations - var, let or const

// ES5 - var

var x = 10; // Global variable

function someFunction(){
    var y = 20; // Local variable --> Function scoped
    let i = 0
    while(i>10){
        var result=0; // Function Scoped 
        result = result+i;
        console.log(result);
    }

    console.log(result); //valid

    // ES6 or TypeScript --> Lexical or block level variable : let or const
    while(i>10){
        let result1=0; // Function Scoped 
        result = result1+i;
        console.log(result1);
        const temp = 10;
       // temp = 20;
    }
    // console.log(temp);
    // console.log(result1); // result 1 is Block scoped
}

