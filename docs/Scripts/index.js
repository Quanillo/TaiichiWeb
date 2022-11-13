function goToPageDelay(page, n){
  setTimeout(function() {
    document.location = "#" + page;
  }, n);
}
//================  SIONO  ==========================
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formSiono').addEventListener('submit', submitSiono); 
});

function submitSiono(e) {
    e.preventDefault();
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
  else if(question == ''){
    document.getElementById('msg').innerHTML = 'Taiichi no puede responder sin pregunta.'
  }
  else if(n%2==0){
    document.getElementById('msg').innerHTML = question + '<br> SI.';
  }
  else{
    document.getElementById('msg').innerHTML = question + '<br> NO.';
  }
  goToPageDelay('hero', 100);
}

//================  MANODEDIOS  ==========================
let manodediosOptions = null;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formManodedios').addEventListener('submit', submitManodedios); 
});

function submitManodedios(e) {
  e.preventDefault();
  let question = document.getElementById('preguntaManodedios').value;
  e.target.reset();
  manodediosResponse(question);
  goToPageDelay('manodedios', 50);
}

function manodediosResponse (question){
  if(question !== null && question!=='')
    manodediosOptions.push(question);
}

function manodediosChoice (){
  if(document.getElementById('title') != null)
    document.getElementById('title').remove();

  console.log(manodediosOptions);  

  if(manodediosOptions === null)
    document.getElementById('msg').innerHTML = 'Taiichi no puede decidir entre 0 opciones.'
  else
    document.getElementById('msg').innerHTML = 'Taiichi decide: ' + '<br>' + manodediosOptions[Math.floor(Math.random() * manodediosOptions.length)];
  
    manodediosOptions = [];
  goToPageDelay('hero', 100);
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
}

function iluminaResponse (question){
  if(document.getElementById('title') != null)
    document.getElementById('title').remove();

  if(question.length>400){
    document.getElementById('msg').innerHTML = 'Mucho texto. Sintentiza.';
  }
  else if(question == ''){
    document.getElementById('msg').innerHTML = 'Nada.<br>Solo sé que no sé nada.'
  }
  else{
    document.getElementById('msg').innerHTML = question + '<br>' + iluminaOptions[Math.floor(Math.random() * iluminaOptions.length)];
  }
  goToPageDelay('hero', 100);
}

const iluminaOptions = [
  'No renuncies a tus sueños, sigue durmiendo.',
  'Estoy ocupado peinando a mi tortuga.',
  'Todos somos contingentes, pero tú eres necesario.',
  'Todos deberíamos creer en algo... yo, por ejemplo, creo que tomaré otra copa.',
  'La gente no sabe lo que tiene hasta que recoge su cuarto.',
  '10 millones de moscas no se equivocan, ¡¡coma MIERDA!!',
  'La ignorancia es temporal, la estupidez es para siempre.',
  'Me gustan los largos paseos, especialmente cuando los toma gente molesta.',
  'La edad es algo que no importa, a menos que sea usted un queso.',
  'Un día sin sol es, ya sabes, de noche...',
  'Si no puedes convencerlos, confúndelos.',
  'Hay que fabricar máquinas que nos permitan seguir fabricando máquinas, porque lo que no va a hacer nunca la máquina es fabricar máquinas.',
  'Un vaso es un vaso y un plato es un plato.',
  'Lo más importante que se puede hacer por vosotros es lo que vosotros podáis hacer por vosotros.',
  'No he dormido nada, no me pregunten demasiado',
  'A veces lo mejor es no tomar decisiones, y eso en sí, es una decisión',
]
//============= beta================
