var cantidadComics = 0;
var idPersonaje = 0;
var offset = 4;
var pagina;

const cargarFavoritos = () => {
  var lsdata = window.localStorage.getItem("AWP_Favoritos");
  if (lsdata != "[]" && lsdata != "null" && lsdata != null) {
    catalogo = JSON.parse(lsdata);
    catalogo.forEach((itemComic) => {
      var comic = new Comic(
        itemComic.id,
        itemComic.titulo,
        itemComic.descripcion,
        itemComic.cantPag,
        itemComic.fecha,
        itemComic.portada
      );
      comicsFavoritos.push(comic);
    });
  }
};

/**
 * Función que agregar elementos al catálogo
 * @param {Object} json Contiene la respuesta de la API
 * @returns {Array} Colección de objetos personajes
 */
const crearCatalogo = (json) => {
  totalPersonajes = json.data.total;
  catalogoCompleto=[];
  for (let i = 0; i < json.data.count; i++) {
    var personaje = new Personaje(
      json.data.results[i].id,
      json.data.results[i].name,
      json.data.results[i].description,
      json.data.results[i].thumbnail["path"] +
        "." +
        json.data.results[i].thumbnail["extension"],
      json.data.results[i].comics.available,
      null
    );
    catalogoCompleto.push(personaje);
  }
};

/**
 * Función que muestra los personajes buscados
 */
const mostrarLista = () => {
  listaPersonajes.innerHTML = "";
  listaPersonajes.classList.add("lP-extend");
  catalogoCompleto.forEach((itemPersonaje) => {
    var perSeleccionado = document.createElement("button");
    perSeleccionado.type = "button";
    perSeleccionado.innerText = itemPersonaje["nombre"];
    perSeleccionado.id = itemPersonaje["id"];
    perSeleccionado.className = "btn btn-outline-dark mx-1 mb-1 btn-size";
    listaPersonajes.append(perSeleccionado);
    perSeleccionado.addEventListener("click", (e) => {
      listaPersonajes.innerHTML = "";
      listaPersonajes.classList.remove("lP-extend");
      listaPersonajes.classList.remove("lP-height");
      filtro = catalogoCompleto.filter(function (el) {
        return el.id == e.target.id;
      });
      if (filtro.length == 1) {
        filtro[0].mostrarPersonaje();
        if (filtro[0].cantComics) {
          catalogoCompletoComics = [];
          cantidadComics = filtro[0].cantComics;
          idPersonaje = filtro[0].id;
          offset = 0;
          pagina = 0;
          buscarComicAPI(filtro[0].id, 4, 0);
          antComic.style.display = "none";
          if (cantidadComics > 4) proxComic.style.display = "block";
        }
      }
    });
  });
};

/**
 * Muestra el cartel de que no se encontró personaje
 */
const noExistePersonaje = () => {
  listaPersonajes.classList.add("lP-height");
  listaPersonajes.classList.remove("lP-extend");
  antComic.style.display = "none";
  proxComic.style.display = "none";
  var div = document.createElement("div");
  div.className = "center";
  var h2 = document.createElement("h2");
  h2.className = "font-Marvel";
  h2.innerHTML = "No se encontró el personaje";
  var img = document.createElement("img");
  img.setAttribute("src", "img/not_found.jpg");
  img.className = "img-error";
  listaPersonajes.innerHTML = "";
  div.append(h2);
  div.append(img);
  listaPersonajes.append(div);
};

