const listaComics = document.getElementById("listaComics");
const comicsFavoritos = [];

/**
 * Informa que no hay comics guardados
 */
const noExisteComic = () => {
  HTML=`
    <div class="card no-comics">
      <div class="card-body">
        <h2 class="card-text font-Marvel">No tenes ningún comic para ver!!!</h2>
        <img class="card-img-top" src="./img/omg.webp" alt="Imagen OMG no se encontraron comics favoritos">
      </div>
    </div>
  `
  listaComics.innerHTML=HTML;
  document.getElementById('footer').classList.remove('f-abajo');
};

/**
 * Carga los comics favoritos desde el localStorage
 */
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
    document.getElementById('footer').classList.remove('f-abajo');
    mostrarComicsFavoritos();

  } else {
    document.getElementById('footer').classList.add('f-abajo');
    noExisteComic();
  }
};

/**
 * Guarda los datos del catálogo en el localStorage
 */
window.addEventListener("beforeunload", () => {
  //guardo toda la información de la última ciudad y no solo el nombre
  window.localStorage.removeItem("AWP_Favoritos");
  window.localStorage.setItem("AWP_Favoritos", JSON.stringify(comicsFavoritos));
});

/**
 * Muestra los comics favoritos
 */
const mostrarComicsFavoritos = () => {
  comicsFavoritos.forEach((itemComic) => {
    itemComic.mostarComic(1);
  });
};

/**
 * Borra un comic de los favoritos
 */
const borrarComic = (identificador) => {
  for (let i = 0; i < comicsFavoritos.length; i++) {
    if (comicsFavoritos[i].id == identificador.id.split("_").reverse()[0]) {
      comicsFavoritos.splice(i,1);
      identificador.parentElement.parentElement.parentElement.parentElement.remove();
      break;
    }
  }
  if(!comicsFavoritos.length){
    document.getElementById('footer').classList.add('f-abajo');
    noExisteComic();
  }
};

//Llamada para cargar en la página los favoritos
cargarFavoritos();
