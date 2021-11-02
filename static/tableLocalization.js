let typesLocalizationDir = {"cat": "Котенок", "dog": "Щенок", "tiger": "Тигренок"};
let gendersLocalizationDir = {"boy": "Самец", "girl": "Самка", "none": "Неважно"};

document.querySelectorAll("td:nth-child(1)")
    .forEach(type => type.textContent = typesLocalizationDir[type.textContent]);
document.querySelectorAll("td:nth-child(2)")
    .forEach(gender => gender.textContent = gendersLocalizationDir[gender.textContent]);
document.querySelectorAll("td:nth-child(3)")
    .forEach(eyeColor => {
        eyeColor.style.backgroundColor = eyeColor.textContent.toUpperCase();
        eyeColor.textContent = "";
    });
document.querySelectorAll("td:nth-child(4)")
    .forEach(tailLength => tailLength.textContent += " см");
document.querySelectorAll("td:nth-child(6)")
    .forEach(dateOfBirth => dateOfBirth.textContent = new Date(dateOfBirth.textContent).toLocaleDateString());