const menu = document.getElementById("menu");
const actions = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundierMenu();

});

function hundierMenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}