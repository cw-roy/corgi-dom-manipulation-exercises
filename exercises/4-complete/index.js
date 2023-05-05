// Exercise 4:  Change the class of the lis to be "corgi"

// const liElements = document.querySelectorAll('li.dog');
// liElements.forEach(li => {
//   li.classList.remove('dog');
//   li.classList.add('corgi');
// });

// const liElements = document.querySelectorAll('li');
// liElements.forEach(li => {
//   li.classList.replace('dog', 'corgi');
// });

document.querySelectorAll('li.dog').forEach(li => {
  li.classList.add('corgi');
  li.classList.remove('dog');
});


