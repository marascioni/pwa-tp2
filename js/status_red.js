const conex = document.getElementById("conex");

const noConex = () => {
  conex.setAttribute("src", "./img/no_conex.png");  
  listaComics.innerHTML='';
  if(document.getElementById('imgDer')) document.getElementById('imgDer').style.display="none"
  if(document.getElementById('imgIzq')) document.getElementById('imgIzq').style.display="none"
  inputPersonaje.style.display='none';
  buscar.style.display='none';
  listaPersonajes.classList.add("lP-trivia");
  listaPersonajes.classList.remove("lP-height");
  mostrarPregunta(0);
}

window.addEventListener("offline", (event) => {
  noConex();
});

window.addEventListener("online", (event) => {
  conex.setAttribute("src", "./img/si_conex.png");  
  listaPersonajes.classList.remove("lP-trivia");
  listaPersonajes.classList.add("lP-height");
  listaPersonajes.innerHTML='';
  inputPersonaje.style.display='block';  
  buscar.style.display='block';
});

if (!navigator.onLine) {  
  noConex();
}
