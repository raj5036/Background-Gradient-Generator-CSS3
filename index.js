var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var result=document.getElementById("result");

function setColorGradient(){
    document.body.style.background="linear-gradient(to right,"
    +color1.value+","
    +color2.value+")";

    //CSS.textContent=document.body.style.background;
    result.innerHTML=document.body.style.background;
}
color1.addEventListener("input",setColorGradient);
color2.addEventListener("input",setColorGradient);

//var generatedCode=document.getElementsByClassName("lead")[0];
