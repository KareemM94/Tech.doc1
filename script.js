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


// STUPID HOVER STYLING

// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

//     let currentDropdown
//     if(isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]')
//         currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove('active')
//     })
// })
