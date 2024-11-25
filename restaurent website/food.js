let foods=document.getElementById("foods");
let dishes=document.getElementById("dishes");
let treak=document.getElementById("treak");
let trackBtn=document.getElementById("trackBtn");

foods.addEventListener("click",function(){
    foods.style.color="red";
    dishes.style.color="white";
    treak.style.color="white";
})

dishes.addEventListener("click",function(){
    foods.style.color="white";
    dishes.style.color="red";
    treak.style.color="white";
})

treak.addEventListener("click",function(){
    foods.style.color="white";
    dishes.style.color="white";
    treak.style.color="red";
})

let logBtn=document.getElementById("logBtn");
 logBtn.addEventListener("click",function(){
    document.querySelector(".loginPage").style.display="block";
})

 let loged=document.getElementById("logedBtn");
 loged.addEventListener("click",function(){
    let email=document.getElementById("name");
    let pass=document.getElementById("pass");

    if(email.value =="" || name.value ==" "){
        alert("Please Enter Email And Password");
    }else{
        alert("You Loged In");
        document.querySelector(".loginPage").style.display="none";
    }
})


 trackBtn.addEventListener("click",function(){
    document.querySelector(".tracking").style.display="flex";
    document.querySelector(".foodcard").style.display="none";
    document.querySelector(".dish").style.display="none";
    document.querySelector(".treak").style.display="none";
    document.querySelector(".main").style.display="none";
    document.querySelector(".footer").style.display="none";
    document.querySelector(".navigation").style.display="none";
 })
