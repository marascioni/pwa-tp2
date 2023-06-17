/**
 * Función que realiza el fetch a la API buscando lotes de 100 personajes
 * @param {String} nombre Nombre del personaje buscado
 * @returns {Object} Colección de objetos personajes
 */
const buscarMarvelAPI = (nombre) => {
  fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${APIKEY}&hash=${hash}&limit=100&nameStartsWith=${nombre}`
  )
    .then((respuesta) => {
      return respuesta.json(); // retorno al siguiente then el response como json
    })
    .then((json) => {
      crearCatalogo(json);
      mostrarLista();
      if (!json.data.total)
        noExistePersonaje();
      else
        listaPersonajes.classList.add("lP-height");
    })
    .catch((err) => {
      console.log(`Hubo un error: ${err}`);
    })
    .finally((final) => {
      // borra el loading
      console.log("ejecuto el finally");
    });
};
