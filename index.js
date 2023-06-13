document.querySelectorAll('.accordion-item__label').forEach((item) =>
    item.addEventListener('click', () =>{
       item.parentNode.classList.toggle('accordion-item--active');

        
    })

)


