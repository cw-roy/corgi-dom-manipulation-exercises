// Exercise 5:  Set the text of the two lis to be "Pembroke" and "Cardigan"

// const liElements = document.getElementsByClassName('dog');
// for (let i = 0; i < liElements.length; i++) {
//   if (i === 0) {
//     liElements[i].textContent = 'Pembroke';
//   } else {
//     liElements[i].textContent = 'Cardigan';
//   }
// }


const liElements = document.querySelectorAll('li');
liElements[0].textContent = 'Pembroke';
liElements[1].textContent = 'Cardigan';

