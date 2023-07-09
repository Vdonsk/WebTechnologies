let count = 0;
function changedColor () {
let el2 = document.getElementById('el1'); // получили элемент по id
console.log(el2);
// if (count % 2 == 0) el2.classList.add('ice'); // добавили класс
// else el2.classList.remove('ice'); // удалили класс
// count++;

el2.classList.toggle('ice');
}

let btn1 = document.getElementById('btn1');
console.log(btn1);

btn1.addEventListener('click', changedColor)