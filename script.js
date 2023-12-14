
document.getElementById("buttonLogin").addEventListener("click", function(){
    document.querySelector(".popupLog").style.display = "flex"
})

document.getElementById("buttonReg").addEventListener("click", function(){
    document.querySelector(".popupReg").style.display = "flex"
})

document.querySelector(".closeReg").addEventListener("click", function(){
    document.querySelector(".popupReg").style.display = "none";
})

document.querySelector(".closeLog").addEventListener("click", function(){
    document.querySelector(".popupLog").style.display = "none";
})



