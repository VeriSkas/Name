
let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '`'];
let russianLetters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
let input_name = document.querySelector('.name');
let input_surname = document.querySelector('.surname');
let input_password = document.querySelector('.password');
let input_password2 = document.querySelector('.password2');
let submit_btn = document.querySelector('.buttons button[type="submit"]');

function checkForUnacceptableSymbols(arr1, arr2) { //проверка на недопустимые символы
    let unacceptableSymbols = [];
    for (let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            unacceptableSymbols.push(arr2[i]);
        }
    }
    if(unacceptableSymbols.length > 0) {
        alert ('Недопустимые символы в имени или фамилии: '+ unacceptableSymbols);
    }
}

function checkPasswordMatch(str1, str2) {
    if (str1.length === str2.length) {
        if (str1 !== str2) {
            alert ('Пароли не совпадают!')
        }
    } else if (str1.length < 6) {
        alert ('Пароль слишком короткий! Должен быть не менее 6 символов')
    } else {
        alert ('Пароли не совпадают!')
    }
    console.log(str1, str2);
}

submit_btn.onclick = function() {
    let input_name_arr = input_name.value.toLowerCase().split('');
    let input_surname_arr = input_surname.value.toLowerCase().split('');
    checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_name_arr);
    checkForUnacceptableSymbols(englishLetters.concat(russianLetters), input_surname_arr);
    checkPasswordMatch(input_password.value, input_password2.value);
}
