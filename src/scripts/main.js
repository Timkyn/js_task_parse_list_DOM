'use strict';

const ul = document.querySelector('ul');
const listInfo = ul.querySelectorAll('li');
// create a dataBase
const dataBase = [];

// add a data to dataBase
for (const li of listInfo) {
  dataBase.push(li);
}

// imlement a sort algorythm
function sortList(list) {
  // const start = [...list];

  return list.sort(
    (a, b) => convert(a.dataset.salary) - convert(b.dataset.salary),
  );
}

// // create a convert function helper
// function convert(string) {
//   return parseFloat(string.replace(',', '.').slice(1));
// }

// upgrade 2.0
function convert(employe) {
  return parseFloat(employe.dataset.salary.replace(',', '.').slice(1));
}

// console.log(
//   convert(dataBase[5].dataset.salary) > convert(dataBase[4].dataset.salary),
// );
// // Find expression for a transform to a valid number
// console.log(
// parseFloat(dataBase[6].dataset.salary.replace(',', '.').slice(1)));

// console.log(sortList(dataBase));
// changing order mechanysm
// list.appendChild(dataBase[6]);

sortList(dataBase);
