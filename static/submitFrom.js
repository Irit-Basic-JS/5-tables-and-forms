let submit = document.querySelector("input[type=submit]");
let reset = document.querySelector("input[type=reset]");
let rules = document.querySelector("input[name=rules]");

rules.onchange = function () {
    submit.disabled = !rules.checked;
}

reset.onclick = function () {
    submit.disabled = true;
} 