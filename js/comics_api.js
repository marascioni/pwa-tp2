const buscarComicAPI = (idPersonaje, limit, offset) => {
fetch(`https://gateway.marvel.com/v1/public/characters/${idPersonaje}/comics?ts=1&apikey=${APIKEY}&hash=${hash}&limit=${limit}&offset=${offset}&orderBy=title`)
.then((respuesta) => {          
      return respuesta.json(); // retorno al siguiente then el response como json
})
.then((json) => {                  
      crearCatalogoComics(json);
})
.catch((err) => {
  console.log(`Hubo un error: ${err}`);
})
.finally((final) => {
  // borra el loading
  console.log("ejecuto el finally");
  
})

}
