let modeBtn = document.getElementById("mode-switch");

modeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        modeBtn.src="pics/sun.png";
    }else{
        modeBtn.src="pics/moon.png";
    }
});

