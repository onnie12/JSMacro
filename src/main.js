
let chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let inputNum = document.getElementById("inputNumHere");
let inputMouse = document.getElementById("inputMouseHere");
const errorText = document.getElementById("errorText");

function startMacro(){
    let holdButton = document.getElementById("holdBtn");
    let inputNum = document.getElementById("inputNumHere");
    if(inputNum.value == "1"){
        startMacro();
    }
    else{
        errorText.textContent = "Sorry, Your Input is not a valid number.";
    }
    let inputMouse = document.getElementById("inputMouseHere");
    if(inputMouse.value == "M1", "M2"){
        startMacro();
    }
    else{
        errorText.textContent = "Sorry, That Mouse Button does not seem to exist.";
    }
}