(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
