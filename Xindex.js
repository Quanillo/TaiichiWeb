let msg = document.getElementById('msg');
let formSiono = document.getElementById('formSiono');
let formManodedios = document.getElementById('formManodedios');
let formIlumina = document.getElementById('formIlumina');
let text = '';

//SIONO
function submitSiono(e) {
    let question = document.getElementById('preguntaSiono').value;
    sionoResponse(question);
    window.location = "#hero";
    e.preventDefault();
  }
formSiono.addEventListener("submit", submitSiono);

function sionoResponse (question){
  let n = Math.round(Math.random() * (2 - 1) + 1);
  if(n%2==0){
    msg.innerHTML = question + '? <br> SI.';
  }
  else{
    msg.innerHTML = question + '? <br> NO.';
  }
}

//MANODEDIOS
function submitManodedios(e) {
  let question = document.getElementById('preguntaManodedios').value;
  manodediosResponse(question);
  e.preventDefault();
}
formManodedios.addEventListener("submit", submitManodedios);

const manodediosOptions = [];

function manodediosResponse (question){
  manodediosOptions.push(question);
  console.log(manodediosOptions);
}

function manodediosChoice (){
  let n = Math.round(Math.random() * (manodediosOptions.length - 0) + 0);
  msg.innerHTML = 'Elección suprema: ' + '<br>' + manodediosOptions[n];
  window.location = "#hero";
}

//ILUMINA
function submitIlumina(e) {
  let question = document.getElementById('preguntaIlumina').value;
  iluminaResponse(question);
  window.location = "#hero";
  e.preventDefault();
}
formIlumina.addEventListener("submit", submitIlumina);

function iluminaResponse (question){
  let n = Math.round(Math.random() * (iluminaOptions.length - 0) + 0);
  msg.innerHTML = question + '<br>' + iluminaOptions[n];
}

const iluminaOptions = [
  'Cierra los ojos, y deja que Taiichi guíe tus dedos.',
  'No renuncies a tus sueños, sigue durmiendo.',
  'Estoy ocupado peinando a mi tortuga.',
  'Todos somos contingentes, pero tú eres necesario.',
]



