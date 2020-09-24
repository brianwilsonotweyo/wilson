/* Showing the menu */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// Remove the Menu
const navLink = document.querySelectorAll('.nav_link')

function LinkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))


// switching active links
const sections =  document.querySelectorAll('section[id]')
window.addEventListener("scroll", scrollActive)

function scrollActive(){
    const scrollY =window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop 
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }
        else{
            document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// SCROLL REVEAL
const sr = ScrollReveal({
    origin:'top',
    distance:"80px",
    duration:2000,
    reset:true
})

// scroll home

sr.reveal('.home_title',{})
sr.reveal('.home_scroll',{delay: 200})
sr.reveal('.home__img',{origin: 'right', delay:400})

// Scroll About
sr.reveal('.about__img',{delay:500})
sr.reveal('.about__subtitle',{delay:300})
sr.reveal('.about_me',{delay:400})
sr.reveal('.about_text',{delay:500})
sr.reveal('.about_social-icon',{delay:600, interval: 200})

// scroll skills

sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_name',{distance:'20px', delay:50, interval: 100})

// scroll portfolio
sr.reveal('.portfolio_img',{interval: 200})


// scroll contact
sr.reveal('.contact_subtitle',{})
sr.reveal('.contact_text',{interval: 200})









