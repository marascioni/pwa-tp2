/**
 * Clase para representar un Personaje
 */
class Personaje {
  //Propiedades Públicas
  id;
  nombre;
  descripcion;
  foto;
  cantComics;
  arrayComics;

  /**
   * Inicializador de instancia de clase
   * @param {Number} id ID del personaje
   * @param {String} nombre Nombre
   * @param {String} descripcion Descripcion
   * @param {String} foto Lugar de la foto
   * @param {Number} cantComics Cantidad de comics
   */
  constructor(id, nombre, descripcion, foto, cantComics, listComics) {
    /* Inicializo las propiedades publicas con los parametros que entran */
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.foto = foto;
    this.cantComics = cantComics;
    this.arrayComics = listComics;
  }

  /**
   * Muestra el personaje seleccionado
   */
  mostrarPersonaje() {
    listaPersonajes.innerHTML = `

    <div class="col">
    <div class="card mb-5 w-75 mx-auto d-block">
        <div class="row ">
            <div class="col-md-7">
                <img src="${this.foto}"" class="img-fluid mx-auto d-block" alt="Ilustración del personaje ${this.nombre}">
            </div>
            <div class="col-md-5 d-flex flex-column p-1">
                <div class="card-body flex-grow-0">
                  <h2 class="card-title card-personaje">${this.nombre}</h2>
                  <p class="card-text"> <span class="text-bold">Descripcion:</span> ${this.descripcion}</p>
                  <p class="card-text"> <span class="text-bold">Cant. Comics:</span> ${this.cantComics}</p>
                </div>
            </div>
        </div>
    </div>
    </div>            
            `;
    
  }
}
