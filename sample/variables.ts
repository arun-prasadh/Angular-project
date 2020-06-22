let data:number=10;
let isValid:boolean=true;
isValid=false;
let someData:any="abc";
someData=123;
let mylist:number[]=[1,2,3];
let names:string[]=["aaa","bb"];
//enumerator
enum color {Red,Blue,Green};
let c:color=color.Blue;

//functions
function myFunction():void {

}
function testfun(a:number=0,b:string):string{
    return a + b;
}
var x=10;
function somefunction(){
    var y=20;
    var i=0;
    while(i>10){
        var result=0;//function scoped
        result=result+i;
        console.log(result);

    }
    console.log("outside loop:"+result)

    //ES6 or typescript-->lexical or block level variable:let or const
    while(i>10){
        let result1=0;//block scoped
        result1=result1+i;
        console.log(result1);
        const temp=10;
    
    }
    //console.log("outside loop:"+temp)//throws error since its block scoped
    //console.log("outside loop:"+result1)//throws error
}
