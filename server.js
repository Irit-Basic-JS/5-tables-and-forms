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

// Валидация двнных формы: emal, мобильный телефон, имя, дата рождения
// Остальные данные вводятся "по-шаблону", поэтому там ошибок не может быть
function validation (value)
{   
    // Дата рождения не должна быть больше системной даты
    const sysdate = new Date();
    const mydate = new Date(value.dateOfBirth);
    if (mydate > sysdate) 
    return `<p class="error">Ошибка!!! Дата рождения не может быть больше сегодня</p>`;
    // Имя должно соcтоять из букв
    const NAME_REGEXP = /[A-Z\sА-Я]/i;
    if (!NAME_REGEXP.test(value.name) || value.name.length < 3)
        return `<p class="error">Ошибка!!! Имя должно состоять из букв и содержать не менее 3 символов</p>`;
    // email
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!EMAIL_REGEXP.test(value.email)) 
        return `<p class="error">Ошибка!!! Не верный формат email</p>`;
    // мобильный телефон (содержит 10 цифр)
    const PHONE_REGEXP = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    if (!PHONE_REGEXP.test(value.phone.replace(/\D/g,""))) 
        return `<p class="error">Ошибка!!! Не верный формат номера мобильного телефона</p>`;
};

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});


app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.post('/pets/orders', (request, response) => {
    const reqBody = request.body;
    let pageBody = constructPageBody(reqBody);
    // Валидация (если вернулась не пустая строка, то была ошбка ввода данных)
    const valid = validation(reqBody);
    if (valid) pageBody = valid;
   
    console.log(request.body);

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});
