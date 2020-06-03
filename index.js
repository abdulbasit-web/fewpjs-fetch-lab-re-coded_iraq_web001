function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderBooks(data);
    });
}

// function renderBooks(json) {
//   const main = document.querySelector("main");
//   json.forEach((book) => {
//     const h2 = document.createElement("h2");
//     h2.innerHTML = `<h2>${book.name}</h2>`;
//     main.appendChild(h2);
//   });
// }

function renderBooks(data) {
  const main = document.querySelector("main");
  data.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = `${book.name}`;
    main.appendChild(h2);
  });
}

fetchBooks();
document.addEventListener("DOMContentLoaded", function () {});
