
// Template Javascript

const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

// Mijn Javascript 

const dropDownButton    = document.querySelector(".authinfo > h3 > button"),
      dropDown          = document.querySelector(".dropdown"),
      reservationButton = document.querySelector(".bookdetails > button"),
      reservationState  = document.querySelector(".bookdetails > button > h3");

dropDownButton.addEventListener("click" , () =>{
    dropDown.classList.toggle("dropdown-open");
});

reservationButton.addEventListener("click" , () =>{
    reservationState.textContent = "Toegevoegd aan Reserveringen!";
});
