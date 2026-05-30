document.addEventListener('DOMContentLoaded',function(){
  const demoForm = document.getElementById('demo-form');
  const contactForm = document.getElementById('contact-form');

  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    alert('Thank you! Your request has been received. We will contact you shortly.');
    form.reset();
  }

  if(demoForm) demoForm.addEventListener('submit', handleSubmit);
  if(contactForm) contactForm.addEventListener('submit', handleSubmit);
});