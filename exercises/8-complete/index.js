// Exercise 8:  Add a new `<li>` element with the text "Kiki" to the `<ul>`

// const addListElement = document.createElement("li");
// addListElement.textContent = "Kiki";

// const ulElement = document.querySelector("ul");
// ulElement.appendChild(addListElement);

// Another way:

const ulElement = document.querySelector("ul");
ulElement.innerHTML += "<li>Kiki</li>";