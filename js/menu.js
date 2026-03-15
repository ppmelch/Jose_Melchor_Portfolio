const menu = document.querySelector(".menu");

if(menu){
    window.addEventListener("scroll", () => {
        if(window.scrollY > 10){
            menu.classList.remove("transparent");
            menu.classList.add("scrolled");
        }else{
            menu.classList.remove("scrolled");
            menu.classList.add("transparent");
        }
    });
}

const links = document.querySelectorAll(".menu a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if(linkPage === currentPage){
        link.classList.add("active");
    }
});