
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

*/


 let form = document.getElementById('form');
 			form.addEventListener('submit', (e) => {
 					e.preventDefault();
 					console.log('submitted');
 					let { first_name, last_name, tel} = form.elements;

 					console.log ( first_name, last_name, tel )
 					let resObj = {
 						name: first_name.value,
 						last_name: last_name.value,
 						phone: tel.value
 					}


 					console.log( JSON.stringify(resObj) );
 })

parse.addEventListener('click', () => {
	let value = parse_input.value;
	console.log( JSON.parse( value ) );
})
