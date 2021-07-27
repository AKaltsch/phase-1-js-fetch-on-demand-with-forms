const init = () => {
  const inputform = document.querySelector('form')
  inputform.addEventListener('submit', (event) => {
    event.preventDefault();

    // both of these ways can be used to select the input value

    const input = document.querySelector('input#searchByID')
    //console.log(event.target.children[1].value)

    //console.log(input.value)


    //grab and create a movie array from the movies database
    //
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(movie => {
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')
        
        title.innerText = movie.title
        summary.textContent = movie.summary
    });

 });
}

document.addEventListener('DOMContentLoaded', init);