'use strict';

const list = document.querySelector('ul');
const listInfo = list.querySelectorAll('li');

const dataBase = [];

for (const li of listInfo) {
  dataBase.push(li);
}

list.appendChild(dataBase[6]);
