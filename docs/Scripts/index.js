//================  SIONO  ==========================
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formSiono').addEventListener('submit', submitSiono); 
});

function submitSiono(e) {
    e.preventDefault();
    hideKeyboard();
    document.location = "#siono";
    let question = document.getElementById("preguntaSiono").value;
    e.target.reset();
    sionoResponse(question);
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
  document.location = "#hero";
}

//================  MANODEDIOS  ==========================
let manodediosOptions = [];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formManodedios').addEventListener('submit', submitManodedios); 
});

function submitManodedios(e) {
  e.preventDefault();
  hideKeyboard();
  let question = document.getElementById('preguntaManodedios').value;
  e.target.reset();
  manodediosResponse(question);
}

function manodediosResponse (question){
  if(question !== null && question!=='')
    manodediosOptions.push(question);
}

function manodediosChoice (){
  hideKeyboard();
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
  hideKeyboard();
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
function hideKeyboard() {
  //this set timeout needed for case when hideKeyborad
  //is called inside of 'onfocus' event handler
  setTimeout(function() {

    //creating temp field
    var field = document.createElement('input');
    field.setAttribute('type', 'text');
    //hiding temp field from peoples eyes
    //-webkit-user-modify is nessesary for Android 4.x
    field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;');
    document.body.appendChild(field);

    //adding onfocus event handler for out temp field
    field.onfocus = function(){
      //this timeout of 200ms is nessasary for Android 2.3.x
      setTimeout(function() {

        field.setAttribute('style', 'display:none;');
        setTimeout(function() {
          document.body.removeChild(field);
          document.body.focus();
        }, 14);

      }, 200);
    };
    //focusing it
    field.focus();

  }, 50);
}
/*
let viewport = document.querySelector('meta[name=viewport]')
 viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')

document.documentElement.style.setProperty('overflow', 'auto')
 const metaViewport = document.querySelector('meta[name=viewport]')
 metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0')


 const metaViewport2 = document.querySelector('meta[name=viewport]')
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0')


*/