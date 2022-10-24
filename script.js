const hamburger = document.querySelector(".home-hamburger");
const navMenu = document.querySelector(".home-list-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    if(navMenu.hasAttribute('style')){
      navMenu.removeAttribute('style');
    }else{
      navMenu.style.display='block';
    }
    
    // navMenu.classList.toggle("");
}
