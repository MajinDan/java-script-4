//global scope
 let myGlobal = 10;
function fun1(){
   oopsGlobal = 5; 
}
function fun2(){
    let output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal:" = myGlobal;

    }
    console.log(output);
}
fun1();
fun2();