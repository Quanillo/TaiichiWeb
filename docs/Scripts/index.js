//================  SIONO  ==========================
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formSiono').addEventListener('submit', submitSiono); 
});

function submitSiono(e) {
    e.preventDefault();
    document.location = "#siono";
    let question = document.getElementById("preguntaSiono").value;
    e.target.reset();
    sionoResponse(question);
    navigator.virtualKeyboard.hide();
    document.location = "#hero";
  }

function sionoResponse (question){
  let n = Math.round(Math.random() * (2 - 1) + 1);
  if(document.getElementById('title') != null)
    document.getElementById('title').remove();
   
  if(question.length>400){
    document.getElementById('msg').innerHTML.innerHTML = 'Mucho texto. Sintentiza.';
  }
  else if(n%2==0){
    document.getElementById('msg').innerHTML = question + '<br> SI.';
  }
  else{
    document.getElementById('msg').innerHTML = question + '<br> NO.';
  }
}

//================  MANODEDIOS  ==========================
let manodediosOptions = [];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formManodedios').addEventListener('submit', submitManodedios); 
});

function submitManodedios(e) {
  e.preventDefault();
  let question = document.getElementById('preguntaManodedios').value;
  e.target.reset();
  manodediosResponse(question);
}

function manodediosResponse (question){
  if(question !== null && question!=='')
    manodediosOptions.push(question);
}

function manodediosChoice (){
  if(document.getElementById('title') != null)
    document.getElementById('title').remove();

  document.getElementById('msg').innerHTML = 'Taiichi decide: ' + '<br>' + manodediosOptions[Math.floor(Math.random() * manodediosOptions.length)];
  manodediosOptions = [];
  document.location = "#hero";
}

//================  ILUMINA  ==========================
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formIlumina').addEventListener('submit', submitIlumina); 
});

function submitIlumina(e) {
  e.preventDefault();
  let question = document.getElementById('preguntaIlumina').value;
  e.target.reset();
  iluminaResponse(question);
  document.location = "#hero";
}

function iluminaResponse (question){
  if(document.getElementById('title') != null)
    document.getElementById('title').remove();

  if(question.length>400){
    document.getElementById('msg').innerHTML = 'Mucho texto. Sintentiza.';
  }
  else{
    document.getElementById('msg').innerHTML = question + '<br>' + iluminaOptions[Math.floor(Math.random() * iluminaOptions.length)];
  }
}

const iluminaOptions = [
  'Cierra los ojos, y deja que Taiichi guíe tus dedos.',
  'No renuncies a tus sueños, sigue durmiendo.',
  'Estoy ocupado peinando a mi tortuga.',
  'Todos somos contingentes, pero tú eres necesario.',
]
//============= beta================

/*
let viewport = document.querySelector('meta[name=viewport]')
 viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')

document.documentElement.style.setProperty('overflow', 'auto')
 const metaViewport = document.querySelector('meta[name=viewport]')
 metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')


 const metaViewport2 = document.querySelector('meta[name=viewport]')
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')


*/