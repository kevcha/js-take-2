// Exercice 1
const ex1Trigger = document.querySelector('#ex1-trigger');
const ex1Destination = document.querySelector('#ex1-destination');

let counter = 0;
ex1Trigger.addEventListener('click', function() {
  counter += 1;
  ex1Destination.innerText = `Clicked ${counter} times`;
});

// Exercice 2
const ex2Input = document.querySelector('#ex2-input');
const ex2Trigger = document.querySelector('#ex2-trigger');
const ex2Destination = document.querySelector('#ex2-destination');

ex2Trigger.addEventListener('click', function() {
  ex2Destination.innerText = ex2Input.value;
});

// Exercice 3
const ex3Input = document.querySelector('#ex3-trigger');
const ex3Destination = document.querySelector('#ex3-destination');

ex3Input.addEventListener('keyup', function() {
  ex3Destination.innerText = ex3Input.value;
});

// Exercice 4
const ex4Trigger = document.querySelector('#ex4-trigger');
ex4Trigger.addEventListener('mouseover', function() {
  ex4Trigger.innerText = 'Hovering';
});
ex4Trigger.addEventListener('mouseleave', function() {
  ex4Trigger.innerText = 'Not hovering';
});

// Exercice 5
const ex5Trigger = document.querySelector('#ex5-trigger');
const ex5Content = document.querySelector('#ex5-content');

ex5Trigger.addEventListener('click', function() {
  ex5Content.classList.toggle('hidden');
});







