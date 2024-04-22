// Select all elements with the class "card"
const cards = document.querySelectorAll(".card");

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
