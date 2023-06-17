/**
 * Clase para representar un Video
 */
class Video {
  //Propiedades Públicas
  id;
  titulo;
  
  /**
   * Inicializador de instancia de clase
   * @param {Number} id ID del video
   * @param {String} titulo Titulo
   */
  constructor(id, titulo) {
    /* Inicializo las propiedades publicas con los parametros que entran */
    this.id = id;
    this.titulo = titulo;    
  }

  /**
   * Muestra una card de video
   * @return {String} Cadena con código HTML
   */
  mostrarVideo() {
    let HTML = `
    <div class="card center">
        <iframe class="play-video" src="https://www.youtube.com/embed/${this.id}" allow="autoplay; encrypted-media" allowfullscreen
        title=${this.titulo}></iframe>
        <div class="card-body">
           <h2 class="card-title text-fs">${this.titulo}</h2>                     
        </div>
    </div>            
    `;    
    return HTML;
  }
}
