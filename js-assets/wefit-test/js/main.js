// HEADER
const header = document.querySelector(".jumbotron");

if (header) {
  // Inline customizations are avoided by using the class constructor
  header.classList.add("custom-header");
  const link = header.querySelector("a");
  // change the button to a success class that can be reused
  link.classList.add("success-button");
}
// END HEADER

// CARDS
const cards = document.querySelectorAll(".card");
if (cards?.length) {
  // Array to store the HTML elements of the cards in the original order
  const reorganizedElements = [];

  // Store the HTML elements of the cards in the original order
  for (const card of cards) {
    reorganizedElements.push(card);
  }

  // Remove and keep the last element
  const lastElement = reorganizedElements.pop();

  // Insert the last element at the first position
  reorganizedElements.unshift(lastElement);

  // Swap the last and second-to-last elements to restore the original order
  const newLast = reorganizedElements.pop();
  const penultimate = reorganizedElements.pop();
  reorganizedElements.push(newLast);
  reorganizedElements.push(penultimate);

  // Array to store the parent elements of the cards
  const cardParents = [];

  // Store the parent elements of the cards
  cards.forEach((card) => {
    cardParents.push(card.parentElement);
  });

  // Remove all cards from the DOM
  cards.forEach((card) => card.remove());

  // Insert the reorganized cards back into the DOM in the correct order
  reorganizedElements.forEach((card, index) => {
    cardParents[index].appendChild(card);
  });
}
// END CARDS

// Lista
const listGroup = document.querySelector(".list-group");
const listGroupItem = listGroup.querySelector(".list-group-item");

if (listGroup && listGroupItem) {
  function createCleanItemList() {
    const cleanElement = document.createElement("li");
    cleanElement.className = listGroupItem.className;
    cleanElement.classList.remove("active");
    return cleanElement;
  }

  ["Quarto item", "Quinto item"].forEach((itemName) => {
    const newItem = createCleanItemList();
    newItem.innerHTML = itemName;
    listGroup.appendChild(newItem);
  });

  // Remove the active from the first element
  listGroupItem.classList.remove("active");

  const listGroupItems = listGroup.querySelectorAll(".list-group-item");

  // add active class to the penultimate item
  listGroupItems[listGroupItems.length - 2].classList.add("active");
}
// END LISTA
