/**
 * Levanto los datos del catálogo en el LocalStorage
 */
//window.addEventListener("load", cargarCatalogo);
window.addEventListener("load", cargarFavoritos);
 
/**
 * Guarda los datos del catálogo en el localStorage
 */
window.addEventListener("beforeunload", () => {
  //guardo toda la información de la última ciudad y no solo el nombre
  window.localStorage.setItem('AWP_Marvel', JSON.stringify(catalogoCompleto));  
  window.localStorage.setItem('AWP_Favoritos', JSON.stringify(comicsFavoritos));  
}); 

/**
 * Botón para hacer la búsqueda del personaje
 */
buscar.addEventListener("click", (event) => {  
  event.preventDefault();
  listaPersonajes.innerHTML='';
  buscarMarvelAPI(inputPersonaje.value);
  inputPersonaje.value='';
  
})


/* buscar.setAttribute('disabled','true');

listaPersonajes.classList.add("lP-trivia");
listaPersonajes.classList.remove("lP-height");
mostrarPregunta(0); */