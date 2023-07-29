const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

let word1 = "Missnakita";
let word2 = "Balikkana";
var bool = 0;
function getCaptcha(){
    captcha.innerText = word1;
    bool = 0;
}
function getCaptchaAgain(){
    captcha.innerText = word2;
    bool = 1;
}

getCaptcha(); //calling getCaptcha when the page open
//calling getCaptcha & removeContent on the reload btn click
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  if(bool == 0){
    getCaptchaAgain();
  }
  else{
    getCaptcha();
  }
});

checkBtn.addEventListener("click", e =>{
  e.preventDefault(); //preventing button from it's default behaviour
  statusTxt.style.display = "block";
  //adding space after each character of user entered values because I've added spaces while generating captcha
  let inputVal = inputField.value;
  if(inputVal == captcha.innerText){ //if captcha matched
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Imissyouhoneybunchsugarplumchatkanaplease";
    setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Ikaw pa rin talaga!"; 
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}