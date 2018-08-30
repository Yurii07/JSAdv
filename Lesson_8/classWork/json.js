/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

*/
var x = document.getElementsByTagName("input");

var obj;
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    let {first_name, last_name, tel} = form.elements;

    console.log(first_name, last_name, tel)
    let resObj = {
        name: first_name.value,
        last_name: last_name.value,
        phone: tel.value
    }


    console.log(JSON.stringify(resObj));
    obj = JSON.stringify(resObj);
})

parse.addEventListener('click', () => {

    var str = JSON.parse(obj);
    // console.log( JSON.parse( obj )  );

    if (parse_input.value == 1) {
        console.log('first name - ', str.name)

    } else if (parse_input.value == 2) {
        console.log('last name - ', str.last_name)

    } else if (parse_input.value == 3) {
        console.log('phone : ', str.phone)

    } else {
        console.log('wrong number')
    }

    // let value = parse_input.value;
    // console.log( JSON.parse( value ) );
})
