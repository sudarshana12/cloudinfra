const searchbox = document.querySelector("#search-box");
const outputbox = document.querySelector(".output");

function formattedURL(query) {
  return `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${query}&size=6&suggestions=1&maxSuggestions=6`;
}

function dataHandler(database) {
  let data = database.results;
  outputbox.innerHTML = `<div class='search-content-container'> ${data
    .map(el => {
      return `
      <ul class='ul-list'>
        <li class = 'li-item list-item-image'><a href = "${el.producturl}"><img id='img-cont' src ="${el.productimage}" alt = "" ></a></li>
        <li class = 'li-item list-item-brand' >Brand: ${el.brand} </li> 
        <li class = 'li-item list-item-mrpprice' > MRP: ${el.mrpprice}</li>
        <li class = 'li-item list-item-sellingprice'>Selling Price: ${el.sellingprice} </li> 
    </ul>`;
    })
    .join(" ")
    }</div>`
}


function fetchItems() {
  let query = searchbox.value;
  fetch(formattedURL(query))
    .then(response => response.json())
    .then(database => {
      dataHandler(database);
    });
}

searchbox.addEventListener("input", fetchItems);