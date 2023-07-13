async function userSubmit(event) {
    // чтобы не обновлялась страница
    event.preventDefault();
    // url адрес
    let url = 'https://jsonplaceholder.typicode.com/users/';
    // получить содержимое первого input
    let name = document.getElementsByTagName('input')[0].value;
    let response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })   // преобразованние в тип JSON
        });
    // получаем ответ
    let result = await response.json();
    console.log(response.status);
    console.log(result);
}


let from = document.getElementById('form');
form.addEventListener('submit', userSubmit);