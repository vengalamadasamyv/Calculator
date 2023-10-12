// input box id = box
let output = document.getElementById("box");
// get a number button
function but(num){
    output.value+=num;
    output.style.color="black";
    output.style.fontSize="22px";
    output.style.fontWeight="600";
}
// clear button
function Clear(){
    output.value="";
    output.placeholder="0";
}
// answer button
function calculate(){
    output.value=eval(output.value);
    output.style.color="orangered";
    output.style.fontWeight="600";
    output.style.fontSize="22px"
}
