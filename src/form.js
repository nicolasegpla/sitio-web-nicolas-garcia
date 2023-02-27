const btn = document.getElementById('button');
const inputName = document.querySelector('.section-home-contact__form__input-name');
const inputCorreo = document.querySelector('.section-home-contact__form__input-correo');
const mensaje = document.querySelector('.section-home-contact__form__textarea');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'service_mkrm0zi';
   const templateID = 'template_po7ghr6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      inputName.value = '';
      inputCorreo.value = '';
      mensaje.value = '';
      alert('mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});