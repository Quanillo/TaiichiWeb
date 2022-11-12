let msg = document.getElementById('msg');
let title = document.getElementById('title');
let formSiono = document.getElementById('formSiono');
let formManodedios = document.getElementById('formManodedios');
let formIlumina = document.getElementById('formIlumina');

//SIONO
function submitSiono(e) {
    e.preventDefault();
    let question = document.getElementById('preguntaSiono').value;
    e.target.reset();
    sionoResponse(question);
  }
formSiono.addEventListener("submit", submitSiono);

function sionoResponse (question){
  let n = Math.round(Math.random() * (2 - 1) + 1);
  title.remove();
  if(question.length>400){
    msg.innerHTML = 'Mucho texto. Sintentiza.';
  }
  else if(n%2==0){
    msg.innerHTML = question + '<br> SI.';
    window.location = "#hero";
  }
  else{
    msg.innerHTML = question + '<br> NO.';
    window.location = "#hero";
  }
}

//MANODEDIOS
function submitManodedios(e) {
  e.preventDefault();
  let question = document.getElementById('preguntaManodedios').value;
  e.target.reset();
  manodediosResponse(question);
}
formManodedios.addEventListener("submit", submitManodedios);

let manodediosOptions = [];

function manodediosResponse (question){
  title.remove();
  manodediosOptions.push(question);
}

function manodediosChoice (){
  console.log(manodediosOptions);
  msg.innerHTML = 'Taiichi decide: ' + '<br>' + manodediosOptions[Math.floor(Math.random() * manodediosOptions.length)];
  manodediosOptions = [];
  window.location = "#hero";
}

//ILUMINA
function submitIlumina(e) {
  e.preventDefault();
  let question = document.getElementById('preguntaIlumina').value;
  e.target.reset();
  iluminaResponse(question);
}
formIlumina.addEventListener("submit", submitIlumina);

function iluminaResponse (question){
  title.remove();
  if(question.length>400){
    msg.innerHTML = 'Mucho texto. Sintentiza.';
  }
  else{
    msg.innerHTML = question + '<br>' + iluminaOptions[Math.floor(Math.random() * iluminaOptions.length)];
    window.location = "#hero";
  }
}

const iluminaOptions = [
  'Cierra los ojos, y deja que Taiichi guíe tus dedos.',
  'No renuncies a tus sueños, sigue durmiendo.',
  'Estoy ocupado peinando a mi tortuga.',
  'Todos somos contingentes, pero tú eres necesario.',
]



