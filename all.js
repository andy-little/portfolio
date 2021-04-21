document.addEventListener('DOMContentLoaded', () => {

    //Toggle between hamburger and close symbol
    const hamBurger = document.querySelector('.mob-tog');
    hamBurger.onclick = () => {
        hamBurger.classList.toggle('open');
    }
 
    

});

window.onload = () => {

    //Replace desktop menu with minimize sign when scrolling past header 
    const deskMenu = document.querySelector('.desk-menu');

    

    window.addEventListener('scroll', () => {
        //AND hide minimise sign and menu when at contact section
        const contact = document.querySelector('#contact');
        const contactPosition = contact.offsetTop - 250;
        //hide menu and show
        if (window.pageYOffset > 315 && deskMenu.classList.contains('open')) {
            deskMenu.classList.remove('open')
        } else if (window.pageYOffset < 315 && !deskMenu.classList.contains('open')) {
            deskMenu.classList.add('open');
        } else if (window.pageYOffset > contactPosition) {
            //hide minimise sign and show
            deskMenu.classList.add('close');
        } else if (window.pageYOffset < contactPosition) {
            deskMenu.classList.remove('close');
        }

    });
};