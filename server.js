const express = require('express');
const app = express();
const port = 3000;
const constructPageBody = require('./checkOrder');


const pageHead =
    `
<!DOCTYPE html>
<html lang="ru">
<head>
<title>Результат заказа питомца</title>
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<main>
<h1>Результат заказа питомца</h1>
`;

const pageFoot =
    `
<a href="/" class="goback">⃪ Вернуться к форме заказа</a>
</main>
</body>
</html>
`;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.post('/pets/orders', (request, response) => {
    const pageBody = validate(request.body);
    console.log(request.body);

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});

function validate(reqBody) {
    const nameRegex = /^([a-zа-я]+[\s]*)*$/i;
    if (!nameRegex.test(reqBody.name))
        return `<p class="error">Ошибка! Имя должно состоять только из букв и не начинаться с пробела.</p>`;

    const phoneRegex = /^((\+7)|8)[9]\d{9}$/;
    if (!phoneRegex.test(reqBody.phone))
        return `<p class="error">Ошибка! Укажите номер телефона в формате 89ХХХХХХХХХ или +79ХХХХХХХХХ.</p>`;

    const date = new Date(reqBody.dateOfBirth);
    const sysDate = new Date();
    if (date > sysDate)
        return `<p class="error">Ошибка! Дата рождения не может быть позднее сегодняшней даты.</p>`;

    return constructPageBody(reqBody);
}