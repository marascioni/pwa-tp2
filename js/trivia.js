const trivia = document.getElementById("listaPersonajes");
var correctas = 0;
var idPregunta = 0;

/**
 * Función para verificar si eligió una respuesta
 * @return {Boolean} valor del control
 */
const mostrarTotalCorrectas = () => {
  trivia.innerHTML = `<h2 class="my-4 h2-trivia">La cantidad de respuestas correctas fue ${correctas}</h2>
    <h3 class="my-2 h3-trivia">Gracias por jugar con nosotros.</h3>
    <img class="img-trivia" src="./img/logo.png" alt="Logo de la página">
    <div>
    <button id="reiniciar" type="button" class="btn btn-pwa my-3">Reiniciar</button>
    </div>
    `;
    document.getElementById("reiniciar").addEventListener("click", (e) => {
      e.preventDefault();
      correctas=0;
      idPregunta=0;
      mostrarPregunta(0);
    });
};

/**
 * Función para verificar si eligió una respuesta
 * @return {Boolean} valor del control
 */
const checkRespuesta = (id) => {
  let options = document.getElementsByName("preguntas");
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) respuesta = i;
  }
  let optionValue = `preguntas[${id}].o` + (respuesta + 1);
  let valor = eval(optionValue);
  if ((valor == preguntas[id].ac)) correctas++;
  mostrarPregunta(++idPregunta);
};

/**
 * Función que controla la respuesta
 * @param {Number} id posición dentro del array de preguntas
 */
const seleccionoRespuesta = () => {
  let options = document.getElementsByName("preguntas");
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) return true;
  }
  return false;
};

/**
 * Función que muestra una pregunta de la trivia
 * @param {Number} id posición dentro del array de preguntas
 */
const mostrarPregunta = (id) => {
  if (id >= preguntas.length) {
    mostrarTotalCorrectas();
  } else {
    listaPersonajes.classList.remove("lP-height");
    var HTML = `
    <div class="container">
    <p class="p-trivia">${id+1}/${preguntas.length}</p>`;
    HTML += `<h2 class="my-3 w-75 mx-auto h2-trivia">${preguntas[id].q}</h2>`;
    for (let i = 0; i < 4; i++) {
      let optionValue = `preguntas[${id}].o` + (i + 1);
      let valor = eval(optionValue);
      HTML += `
            <div class="form-check mt-1">
                <input class="form-check-input" type="radio" name="preguntas" id="o${i}" value="${valor}">
                    <label class="form-check-label" for="o${i}">
                    ${valor}
                    </label>
            </div>
            `;
    }
    HTML +=
      '<button id="submit" type="button" class="btn btn-pwa my-3">Responder</button> </div>';
    trivia.innerHTML = HTML;
    document.getElementById("submit").addEventListener("click", (e) => {
      e.preventDefault();
      if (seleccionoRespuesta()) checkRespuesta(id);
    });
  }
};

