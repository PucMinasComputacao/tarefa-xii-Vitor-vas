function renderMovies(query = '') {
  let url = '';

  if (query) {
    url = `https://api.themoviedb.org/3/search/movie?api_key=cec58e37a8d9cb60c1809bf17e4ef0d4&language=pt-BR&query=${query}`;
  } else {
    url = `https://api.themoviedb.org/3/discover/movie?api_key=cec58e37a8d9cb60c1809bf17e4ef0d4&language=pt-BR`;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let str = ''
      for (let i = 0; i < data.results.length; i++) {
        let filme = data.results[i]
        str += `<div class="card col-md-4 m-3" style="width: 18rem;">
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${filme.title}</h5>
                    <p class="card-text">${filme.overview}</p>
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                  </div>
                </div>`
      }
      document.getElementById('tela').innerHTML = str
    })
}

renderMovies()

document.getElementById('pesquisa').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    renderMovies(this.value)
  }
})

function buscar() {
  const query = document.getElementById('pesquisa').value
  renderMovies(query)
}