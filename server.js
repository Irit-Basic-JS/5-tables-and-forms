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
<a href="/">⃪ Вернуться к форме заказа</a>
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

function isTelPhoneValid(telPhone) {
    if (!telPhone) {
        return false;
    }
    const regex = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;
    return telPhone.match(regex);
}

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.post('/pets/orders', (request, response) => {
    const reqBody = request.body;

    let pageBody = '';

    if (!isTelPhoneValid(reqBody['phone'])) {
        pageBody = '<h3 class="error">Неверный тип данных</h3><p>Поле "Ваш номер телефона" должно соответствовать ввиду +7 (000) 000-00-00<br>'
    } else {
        pageBody = constructPageBody(reqBody);
    }

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});

