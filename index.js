let msg = document.getElementById('msg');
let form = document.getElementById('form');
let text = '';
function submitHandler(e) {
    let dato = document.getElementById('preguntaSiono')[0];
    console.log(dato);
    e.preventDefault();
  }
  form.addEventListener("submit", submitHandler);

msg.innerHTML = text;