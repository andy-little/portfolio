document.addEventListener('DOMContentLoaded', () => {
    const hamBurger = document.querySelector('.mob-tog');
    hamBurger.onclick = () => {
        hamBurger.classList.toggle('open');
    }
 

    const deskMenu = document.querySelector('.desk-menu');
    window.addEventListener('scroll', () => {
    
    if (window.pageYOffset > 315 && deskMenu.classList.contains('open')) {
        deskMenu.classList.remove('open')
    } else if (window.pageYOffset < 315 && !deskMenu.classList.contains('open')) {
        deskMenu.classList.add('open');
    } 
});

});
