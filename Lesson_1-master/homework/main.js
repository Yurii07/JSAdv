/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 6-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 256;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода Number.toString( 16 ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

      */

/*
// 1 Вариант
var btn = document.getElementById('change');
var text = document.getElementById('Color');

function setRandomColor(){
 generator();
 document.body.style.background = newColor;
}
setRandomColor();

function generator() {
  newColor = '#' + 
  (Math.random()*0xFFFFFF<<0).toString(16);
  console.log(newColor.length);
  if(newColor.length < 7) {
    generator();
  }
}

btn.addEventListener('click', function () {
  generator();
  document.body.style.background = newColor;
  btn.style.color = newColor;
  text.innerText = newColor;
})
*/
 /*
// 2 Вариант
      var wrap = document.getElementById('app');
      var text = document.getElementById('Color');
      var divNode = document.createElement('div');

      divNode.className = ('sqare');
      wrap.appendChild(divNode);

      function generate() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function setRandomColor() {
       document.body.style.backgroundColor = generate();
       text.innerText = generate();

     }
     function sqareDiv() {
      divNode.style.cssText ="color: red !important; \
      display: flex;\
      background-color: yellow; \
      width: 100px;\
      height: 100px;\
      text-align: center; \
      display: block;\
      margin: 0 auto;\
      ";
    }sqareDiv();

    setRandomColor();
    
*/
/*
// 3 Вариант c HEX
var wrap = document.getElementById('app');
var btn = document.getElementById('change');
var text = document.getElementById('Color');
var divNode = document.createElement('div');

function generate() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + 
  ',' + (Math.floor(Math.random() * 256)) + 
  ',' + (Math.floor(Math.random() * 256)) + ')';
  return hue;
}

function setRandomColor() {
 document.body.style.backgroundColor = generate();
 text.innerText = generate();
};

setRandomColor() ;

divNode.className = ('sqare');
wrap.appendChild(divNode);

function sqareDiv() {
  divNode.style.cssText ="color: red !important; \
  display: flex;\
  background-color: yellow; \
  width: 100px;\
  height: 100px;\
  text-align: center; \
  display: block;\
  margin: 0 auto;\
  ";
}
sqareDiv();

*/