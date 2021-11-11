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
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<main class="container">
<h1 class="text-primary">Результат заказа питомца</h1>
`;

const pageFoot =
`
<a class="btn btn-primary ps-4" href="/">⃪ Вернуться к форме заказа</a>
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
    const reqBody = request.body;
    const pageBody = constructPageBody(reqBody);

    console.log(request.body);

    response.send(`${pageHead}${pageBody}${pageFoot}`);
});

