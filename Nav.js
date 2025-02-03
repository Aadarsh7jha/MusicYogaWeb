// Menu logic
document.querySelector(".Toggle_Menu").addEventListener("click",()=>{
    document.querySelector(".nav__links").classList.toggle("active");
})


// Toggle animation

document.addEventListener('DOMContentLoaded', () => {
 const hamburgerMenu = document.getElementById('hamburger-menu');

 hamburgerMenu.addEventListener('click', () => {
   const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
   hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
   hamburgerMenu.classList.toggle('active'); // Add/remove the animation class
 });
});
