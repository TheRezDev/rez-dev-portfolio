/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ==== Menu Show ====*/
/* Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

/* ==== Menu Hidden ====*/
/* Validate if constant exists*/
    if (navClose) {
    navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link, we remove the show-remove class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                    :header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_d4sxu76', 'template_e93cvu4', '#contact-form', 'esWFVBPpGg9aO842n')
        .then(() => {
            //show sene message
            contactMessage.textContent = 'Message sent successfully ✅'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //clear input fields 
            contactForm.reset()

        }, () => {
            //show error message 
            contactMessage.textContent = 'Message not sent (service error) ❌'
        });
};

contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
