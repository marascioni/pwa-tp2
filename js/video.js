const divVideos1 = document.getElementById("videos1");
const divVideos2 = document.getElementById("videos2");
const mezclar = document.getElementById("mezclar");

var listaVideos = [];
var listaVideosFiltrados = [];


var video = [
  ["gc2LWdCKPtQ", "La última cacería de Kraven l El mejor cómic de Spider-Man"],
  ["eIt_zg8NyRk", "Venomverse l El Multiverso de simbiontes"],
  ["3G0_470lCy0", "Las diferentes versiones de Spider-Man "],
  ["fhQ2K4Dm2qY", "Los 10 mutantes más poderosos de Marvel"],
  ["Tp_YZNqNBhw", "Marvel Studios Secret Invasion"],
  ["ZN8sfvFm_-4", "Marvel Studios Deadpool 3"],
  ["BQ1pusupDK0", "Marvel Studios THUNDERBOLTS"],
  ["e_we2JPZuiI", "SPIDER-MAN: MILES MORALES"],
  ["LMC1a68xl6k", "THOR 5: Legend of Hercules"],
  ["KKyQgQD_pLI", "AVENGERS 5: THE KANG DYNASTY"],
  ["WGPqBlWo2qY", "Avengers 5: Arrival of Galactus"],
  ["aWzlQ2N6qqg", "Marvel Studios' Doctor Strange in the Multiverse of Madness"],
  ["HyEOrBtb4_g", "THE AMAZING SPIDER-MAN 3: New Beginning"],
  ["25GG9LAUHsA", "Marvel Studios celebra a las películas"],
  ["iHDl8iS1wBw", "HELSTROM Season 1 Official Trailer (2020)"],
  ["Z1BCujX3pw8", "Marvel Studios Captain Marvel"],
  ["823iAZOEKt8", "Avengers: Infinity War"],
  ["5VYb3B1ETlk", "Marvel Studios Hawkeye"],
  ["x_me3xsvDgk", "Marvel Studios Eternals"],
  ["8YjFbMbfXaQ", "Marvel Studios Shang-Chi and the Legend of the Ten Rings"],
];

video.forEach((itemVideo) => {
  let unVideo = new Video(itemVideo[0], itemVideo[1]);
  listaVideos.push(unVideo);
  //HTML += unVideo.mostrarVideo();
});

const filtrarVideos = () => {
  listaVideosFiltrados = [];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * 20);
    if (!i) listaVideosFiltrados.push(listaVideos[index]);
    else {
      filtro = listaVideosFiltrados.filter(function (el) {
        return el.id == listaVideos[index].id;
      });
      if (filtro.length==0) 
        listaVideosFiltrados.push(listaVideos[index]);
      else 
        i--;
    }
  }
};

const visualizarVideo = () => {
  filtrarVideos();
  var HTML1 = "";
  var HTML2 = "";
  for (let i = 0; i < 4; i++) {
    if (i % 2) HTML1 += listaVideosFiltrados[i].mostrarVideo();
    else HTML2 += listaVideosFiltrados[i].mostrarVideo();
  }
  divVideos1.innerHTML = HTML1;
  divVideos2.innerHTML = HTML2; 
};
visualizarVideo();


mezclar.addEventListener("click", (event) => {
  event.preventDefault();
  visualizarVideo();
})