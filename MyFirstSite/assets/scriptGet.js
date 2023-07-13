async function start() {
    // url запроса
    let url = 'http://jsonplaceholder.typicode.com/users/';
    // отправляем запрос и получаем ответ в переменную response 
    let response = await fetch(url);
    // читаем ответ в формате JSON
    let users = await response.json();
    console.log(users);

    // получили элемент, куда будем записывать users
    let section = document.getElementById("users");
    // создали пустую строку, чтобы потом добавить в html текст
    let html = '';
    // перебор массива users
    users.forEach(element => {
        // ' ` ' - буква ё
        // формируем часть html, для перехода на новую строку /n
        let htmlSegment = `<h2>${element.name} </h2>`;
        // добавляем
        html += htmlSegment;
    });
    // добавление в сам элемент сторки
    section.innerHTML = html;
}

start();