
let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let inputNum = document.getElementById("inputNumHere");
let inputMouse = document.getElementById("inputMouseHere");

function startMacro(){
    let inputNum = document.getElementById("inputNumHere");
    if(inputNum.value == 1){
        console.log("works");
    }
    else{
        console.log("Sorry, Your Input is not a valid number.");
    }
    let inputMouse = document.getElementById("inputMouseHere");
    if(inputMouse.value == "M1"){
        console.log("works");
    }
    else{
        console.log("Sorry, That Mouse Button does not seem to exist.");
    }
}