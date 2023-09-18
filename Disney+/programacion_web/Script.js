
function mensaje() {
 alert('Pelicula en reproducción')   
}

function walle(params) {
    window.location.href = "https://cuevana3.rs/pelicula/wall%C2%B7e/";
}



function dumbo(params) {
    window.location.href = "https://cuevana3.rs/pelicula/dumbo/";
}


function abrirNuevaVentana() {

    var redireecion = "https://www11.repelishd.io/pelicula/buscando-a-nemo-2003/";
  

    window.open(redireecion, "_blank");
  };

  
  const ball = document.querySelector(".toggle-ball");
  const items = document.querySelectorAll(".container,.peliculas-lista-item-titulo,.navbar,.navbar-contenido,.sidebar,.left-menu-icon,.toggle");
  ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
  })


  function pestania(params) {
      window.location.href=""
  }


  
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;
  
  function showSlide(index) {
      if (index < 0) {
          currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
          currentIndex = 0;
      }
  
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
      });
  }
  
  prevBtn.addEventListener("click", () => {
      currentIndex--;
      showSlide(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
      currentIndex++;
      showSlide(currentIndex);
  });
  
  showSlide(currentIndex);
  