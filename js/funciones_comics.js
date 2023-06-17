/**
 * Función que agregar elementos al catálogo
 * @param {Object} json Contiene la respuesta de la API
 * @returns {Array} Colección de objetos personajes
 */
const crearCatalogoComics = (json) => {    
    totalPersonajes = json.data.total;    
    catalogoCompletoComics=[];
    for (let i = 0; i < json.data.count; i++) {
      var comic = new Comic(
        json.data.results[i].id,
        json.data.results[i].title,
        json.data.results[i].description,
        json.data.results[i].pageCount,
        json.data.results[i].dates[0].date,
        json.data.results[i].thumbnail["path"] +
          "." +
          json.data.results[i].thumbnail["extension"]   
      );
      catalogoCompletoComics.push(comic);
    }
    mostrarComics();
  };
  
/**
 * Función que muestra los comics del personaje elegido  
 */
const mostrarComics = () => {  
  listaComics.innerHTML='';  
  for (let i = 0; i < catalogoCompletoComics.length; i++) {
    catalogoCompletoComics[i].mostarComic(0);    
  }
}

/**
 * Eventos de escucha sobre las flechas para mostar más comics
 */
proxComic.addEventListener('click',e => {  
  pagina++;
  antComic.style.display='block';
  if(cantidadComics>(pagina*4))
   { buscarComicAPI(idPersonaje, 4, pagina*4);
    if(!(cantidadComics>((pagina+1)*4)))
      proxComic.style.display='none';  }
  else{
    proxComic.style.display='none';    
  }
});


antComic.addEventListener('click',e => {
  console.log('anterior');
  pagina--;
  if(pagina==0)
    antComic.style.display='none';
  if(cantidadComics>4)
    proxComic.style.display='block';
  buscarComicAPI(idPersonaje, 4, pagina*4);
  
});



