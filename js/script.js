window.addEventListener("DOMContentLoaded", init);


function init(){
    document.querySelector(".burger").addEventListener("click", openNav);
}

function openNav(){
    let navigation = document.querySelector(".nav_container");
    if (navigation.style.left == "0px") {
        navigation.style.left = "-400px";
    }else{
        navigation.style.left = "0px";
    }
}