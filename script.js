window.addEventListener('load',() =>{
  const contenedorCarga = document.querySelector('.contenedorCarga');
  contenedorCarga.style.opacity = 0;
  contenedorCarga.style.visibility = 'hidden';
})

const $days = document.getElementById('Days'),
$hours = document.getElementById('Hours'),
$minutes = document.getElementById('Minutes'),
$seconds = document.getElementById('Seconds'),
//fecha a futuro

 countdownDate = new Date ('Feb 19, 2022 20:30:00').getTime();

let interval = setInterval(function(){
	//obtener fecha acutal y milisegundo
  const now = new Date().getTime();

  //obtener entre ambas fechas
  let distance = countdownDate - now;

  //calculos a dias, horas, minutos y segundos
  let Days = Math.floor(distance /(1000 * 60 * 60 * 24));
  let Hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  let Minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60 ))/(1000));

  //Escribimos resultados
$days.innerHTML = Days;
$hours.innerHTML = Hours;
$minutes.innerHTML = Minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);


},1000);

$(document).ready(function(){//llamamos a una funcion para que arranque
   
  //declaro variable
  let boda = $('.InfoBoda').position();

   $('.irAbajo').click(function(){//le decimos que nuestro span al ser clikeado haga lo siguiente
     $('body, html').animate({//nuestro body y html va a tener una animacion 
          scrollTop: boda.top//que se va a scrolear automaticamente  los pixeles dados
     }, 1000);
   });
  
});


let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
  muestraSlides(indice += n);
}

function posicionSlide(n){
  muestraSlides(indice = n);
}
setInterval(function tiempo(){
  muestraSlides(indice+=1);
},4000)


function muestraSlides(n){
  let i;
  
  let slides = document.getElementsByClassName('miSlider')
  let barras = document.getElementsByClassName('barra');
  
  if(n > slides.length){
    indice = 1;
  }
  if(n < 1){
    indice = slides.length();
  }
  
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }

  for(i = 0; i < barras.length; i++ ){
    barras[i].className = barras[i].className.replace("active");
  }

  slides[indice-1].style.display = 'block';
  barras[indice-1].className += ' active';
}



$(document).ready(function(){//llamamos a una funcion para que arranque
   
  //declaro variable
  let boda = $('.confirmarAsistencia').position();

   $('.Confirmar').click(function(){//le decimos que nuestro span al ser clikeado haga lo siguiente
     $('body, html').animate({//nuestro body y html va a tener una animacion 
          scrollTop: boda.top//que se va a scrolear automaticamente  los pixeles dados
     }, 1000);
   });
  
});




