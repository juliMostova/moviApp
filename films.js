const input = document.querySelector(".input-info input"),
  button = document.querySelector(".input-info button"),
  result = document.querySelector(".result");

button.addEventListener("click", (e) => {
  let inpVal = input.value;
  let URL = `https://www.omdbapi.com/?t=${inpVal}&apikey=${apiKey}`;

  if (inpVal.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please enter a movie name </h3>`;
  } else {
    fetch(URL)
      .then((respond) => respond.json())
      .then((data) => {
        console.log(data);

        if (data.Response == "True") {
          result.innerHTML = `
<div class="info">
<img src= ${data.Poster}class="poster">
</div>
<h2>Name:${data.Title}</h2>
<div class="rating">
<img src="star-icon.svg">
<h4>Rating:${data.imdbRating}</h4>
</div>
<div class="ditails">
<span>Genre :<br>${data.Genre}</span>
<span>Years :<br>${data.Year}</span>
<span>Country :<br>${data.Country}</span>
<span>Duration :<br>${data.Runtime}</span>
</div>
<h3>Plot:</h3>
<p>${data.Plot}</p>
<button class="close">&#10006;</button>
`;

let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click',()=>{
 document.location.reload();

});
        } else {
          result.innerHTML = `<h3 class="message">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        result.innerHTML = `<h3 class="message">This film not faund</h3>`;
      });
  }
  input.value = "";



});
