let display = document.querySelector(".display");

let c = () => {
  display.innerText = "";
};

let x = () => {
 let nWdisplay=display.innerText.slice(0,-1);
 display.innerText=nWdisplay;
};

let input=(str)=>{
  display.innerText+=str;
}

const calculate =()=>{
  try{
    display.innerText=eval(display.innerText);
  }
  catch(error){
    display.innerText= "error";
  }
}

