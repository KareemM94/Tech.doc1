const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.middle-right-top-half [id$="-links"]')

window.addEventListener('scroll', ()=> {
    let current = "";

    sections.forEach(section => {
         const sectionTop = section.offsetTop;
         const sectionHeight = section.clientHeight;


         if(pageYOffset >= sectionTop){
             current = section.getAttribute('id');
         }
    })  
    links.forEach(link => {
        link.classList.remove('active');
        if(link.classList.contains(current)){
            link.classList.add('active')
        }
    })
})