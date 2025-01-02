// DOMs
const form = document.querySelector("form");
const textInput = document.querySelector("input#text");
const aside = document.querySelector("aside");
const ul = document.querySelector("ul");
const nameInput = document.querySelector("input#name");

// Event listeners
form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const inputValueName = nameInput.value;
    let inputValue = textInput.value;
   
    aside.appendChild(ul);

    let li = document.createElement("li");
    ul.appendChild(li);

    li.innerHTML = `<button class="delete">&#10005;</button><button class="save">&hearts;</button><a href="${inputValue}" target="_blank">${inputValueName}</a></li>`;

    textInput.value = "";
    nameInput.value = "";
});

