AOS.init({
    duration: 1000
});

function showMenu(){
    document.querySelector(".menus").classList.add("show-menu");
}

function hideMenu(){
    document.querySelector(".menus").classList.remove("show-menu");
}

setTimeout(() => {
    const element = document.getElementById("message-modal");
    if(element){
        element.classList.add("hide-modal");
        window.location.href = "/";
    }
}, 5000);

