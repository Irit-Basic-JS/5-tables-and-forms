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


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.post('/pets/orders', (request, response) => {
    const pageBody = checkCorrect(request.body);

    console.log(request.body);

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});

function checkCorrect(body){
    if (new Date(body.dateOfBirth) > new Date()){
        return '<p class="error">Вы можете заказать только уже родившегося питомца.</p>';
    }
    
    let reg = /(^(\+7|8)\d{10}$)/;
    if( !reg.test(body.phone)){
        return '<p class="error">Введен некорректный телефон</p>';
    }
    
    if(!/@/.test(body.email)){
        return '<p class="error">Скорее всего почта указана некорректно</p>';
    }
    return constructPageBody(body);
}

