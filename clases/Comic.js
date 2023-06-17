/**
 * Clase para representar un Comic
 */
class Comic {
  //Propiedades Públicas
  id;
  titulo;
  descripcion;
  cantPag;
  fecha;
  portada;

  /**
   * Inicializador de instancia de clase
   * @param {Number} id ID del personaje
   * @param {String} titulo Título
   * @param {String} descripcion Descripcion
   * @param {Number} cantPag Cantidad de páginas
   * @param {String} fecha Fechad de publicación
   * @param {String} portada Portada
   */
  constructor(id, titulo, descripcion, cantPag, fecha, portada) {
    /* Inicializo las propiedades publicas con los parametros que entran */
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.cantPag = cantPag;
    this.fecha = fecha;
    this.portada = portada;
  }

  /**
   * Inicializador de instancia de clase
   */
  mostarComic(ind_favorito) {
    var div1 = document.createElement("div");
    div1.className = "col-sm-3 card-width mb-3";
    var div1_1 = document.createElement("div");
    div1_1.className = "card";
    var img = document.createElement("img");
    img.className = "card-img-top img-height";
    img.setAttribute("src", this.portada);
    var div1_1_1 = document.createElement("div");
    div1_1_1.className = "card-body";
    var h2 = document.createElement("h2");
    (h2.className = "card-title title-comic"), (h2.innerText = this.titulo);
    var p1 = document.createElement("p");
    p1.className = "card-text";
    p1.innerText = `Publicado: ${this.formatoFecha()}`;
    var p2 = document.createElement("p");
    p2.className = "card-text";
    p2.innerText = `Páginas: ${this.cantPag}`;
    var imgFav = document.createElement("img");

    /*  ind_favorito
      ? imgFav.setAttribute("src", "img/favorito_on.png")
      : imgFav.setAttribute("src", "img/favorito_off.png"); */
    if (!ind_favorito) {

      let idBuscado=this.id;
      filtro = comicsFavoritos.filter(function (el) {
        return el.id == idBuscado;
      });
      if (filtro.length == 1) {
                imgFav.setAttribute("src", "img/favorito_on.png");
        } else {
          imgFav.setAttribute("src", "img/favorito_off.png");
        }      
    }
    else
    {
      imgFav.setAttribute("src", "img/favorito_on.png");
    }
    if (comicsFavoritos.length == 0)
      imgFav.setAttribute("src", "img/favorito_off.png");
    imgFav.className = "img-favorito";
    imgFav.id = `img_${this.id}`;
    var favorito = document.createElement("button");
    favorito.type = "button";
    favorito.className = "btn img-heart";
    favorito.id = `comic_${this.id}`;
    favorito.append(imgFav);
    div1_1_1.append(h2);
    div1_1_1.append(p1);
    div1_1_1.append(p2);
    div1_1.append(favorito);
    div1_1.append(img);
    div1_1.append(div1_1_1);

    if (!ind_favorito) {
      favorito.addEventListener("click", (e) => {
        if (e.target.src.split("/").reverse()[0] == "favorito_on.png") {
          e.target.setAttribute("src", "img/favorito_off.png");
          var id = e.target.id.substring(4);
          for (let i = 0; i < comicsFavoritos.length; i++) {
            if (comicsFavoritos[i].id == id) {
              comicsFavoritos.splice(i, 1);
            }
          }
        } else {
          e.target.setAttribute("src", "img/favorito_on.png");
          comicsFavoritos.push(this);
        }
      });
      div1.append(div1_1);
      listaComics.append(div1);
    } else {
      var div1_1_2 = document.createElement("div");
      div1_1_2.className = "card-footer center";

      var imgPapelera = document.createElement("img");
      imgPapelera.setAttribute("src", "img/papelera.png");
      imgPapelera.className = "img-favorito";
      imgPapelera.id = `imgPapelera_${this.id}`;
      var btnPapelera = document.createElement("button");
      btnPapelera.type = "button";
      btnPapelera.className = "btn";
      btnPapelera.id = `papelera_${this.id}`;
      var imgOjo = document.createElement("img");
      imgOjo.setAttribute("src", "img/ojo.png");
      imgOjo.className = "img-favorito";
      imgOjo.id = `imgOjo_${this.id}`;
      var btnOjo = document.createElement("button");
      btnOjo.type = "button";
      btnOjo.className = "btn";
      btnOjo.id = `ojo_${this.id}`;
      btnOjo.setAttribute("data-toggle", "modal");
      btnOjo.setAttribute("data-target", "#ComicModal");

      btnPapelera.append(imgPapelera);
      btnOjo.append(imgOjo);
      div1_1_2.append(btnPapelera);
      div1_1_2.append(btnOjo);
      div1_1.append(div1_1_2);
      div1.append(div1_1);
      listaComics.append(div1);

      //Eventos para los botones de borrar y ver más
      btnPapelera.addEventListener("click", (e) => {
        borrarComic(e.target);
      });

      btnOjo.addEventListener("click", (e) => {
        this.mostrarModal();
      });
    }
  }

  /**
   * Formatea la fecha
   */
  formatoFecha() {
    var partes = this.fecha.split("T");
    return partes[0].split("-").reverse().join("-");
  }

  /**
   * Muestra el modal con detalles del comic
   */
  mostrarModal() {
    const modal = document.getElementById("modalComic");
    let HTML = `
    <div class="modal fade" id="ComicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content text-center">
        <div class="modal-header">
          <h5 class="modal-title " id="exampleModalLabel">${this.titulo}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <img class="img-fluid w-75 rounded bg-shadow" src="${this.portada}" alt="Imagen de portada de ${this.titulo}">
            <p class="modal-text">${this.descripcion}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-cerrar" data-dismiss="modal">Cerrar</button>          
        </div>
      </div>
    </div>
    </div>
    `;
    modal.innerHTML = HTML;
  }
}
