const scriptURL = 'https://script.google.com/macros/s/AKfycbyKtvIQT0Zj3nUamynreqd1_Hih77Cii5kCVoc5zMkIAB_Ka754ire1-ulg9C-iPuSk6g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    
    alert("Thank you! your form is submitted successfully." )
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})