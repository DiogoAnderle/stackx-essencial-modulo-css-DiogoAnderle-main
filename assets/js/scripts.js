document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('contact-form');
   form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Formulário Enviado!');
   });
});


// Animação do menu mobile

const btnMenuMobile = document.getElementById('btn-menu-mobile')
const menuMobile = document.getElementById('main-header-mobile')

btnMenuMobile.addEventListener('click', () => {
   btnMenuMobile.classList.toggle('active');
   menuMobile.classList.toggle('open');
   }
)

menuMobile.addEventListener('click', () => {
   btnMenuMobile.classList.toggle('active');
   menuMobile.classList.toggle('open');
   }
)