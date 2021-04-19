const orders = [];
const headings = ["Цвет глаз", "Пол", "Вид животного", "Длина хвоста", "Имя", "Дата рождения", "E-mail", "Телефон заказчика"];

class Order {
    constructor(eyeColor, gender, petType, tailLength, name, dateOfBirth, email, phoneNumber)
    {
        this.eyeColor = eyeColor;
        this.gender = gender;
        this.petType = petType;
        this.tailLength = tailLength;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phone = phoneNumber;
    }

}

function validate(email, phoneNumber) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	return regexEmail.test(email) && regexPhone.test(phoneNumber);
}

module.exports.constructPageBody =  function(reqBody) {
    if (validate(reqBody.email, reqBody.phone)) {
        orders.push(new Order(reqBody.eyeColor, reqBody.gender, reqBody.petType, reqBody.tailLength, reqBody.name, reqBody.dateOfBirth, reqBody.email, reqBody.phone));
        return `<h3>Ваш заказ добавлен!</h3>\n` + generateTable(orders)
    }
    else
        return `<h3>Вы ввели некорректный номер телефона или email</h3>\n` + generateTable(orders);
}

function translate(value)
{
    const regex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    if (value[0] === '#') return "";
     if (value === "boy") return "Мужской";
     if (value === "girl") return "Женский";
     if (value === "none") return "Неопределен";
     if (value === "cat") return "Кошка";
     if (value === "dog") return "Собака";
     if (value === "tiger") return "Тигррр";
     if (regex.test(value)) return reformatDate(value);
     return value;
}

function reformatDate(date)
{
  let dateArr = date.split("-");
  return dateArr[2]+ "." + dateArr[1]+ "." + dateArr[0];
}

function generateTable(data) {
    let tableHtml = `<table class="orders"><caption>Заказы</caption><tr>\n`;
    for(let heading of headings)
    {
        tableHtml  += `<th>\n${heading}</th>\n`;
    }
    tableHtml += "</tr>\n";
    for(let order of orders)
    {
        let values = Object.entries(order);
        tableHtml  += "<tr>\n";

        for(const [key, value] of Object.entries(order))
        {
            tableHtml  += `<td class = "${key}" ${key === "eyeColor" ? ` bgcolor = "${value}"` : ""}>\n${translate(value)}</td>\n`;
        }

        tableHtml  += "</tr>\n";
    }

    tableHtml += "</table>\n";

    return tableHtml;
}