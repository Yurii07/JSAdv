/*
  Любой DOM-элемент это обьект и соответствено мы можем его
  читать и изменять.
*/

  var target = document.getElementById('target');
      // target.someObject = {
      //   host: 'ITEA',
      //   course: 'Js:Advanced'
      // }
      console.log( target.__proto__ );
      // console.log( target.someObject );

  var newDivNode = document.createElement('div');
      newDivNode.innerText = 'New node';

  /* Классы в виде строки */
  // Задаем множественный класс
  newDivNode.className = 'class2 class3 class4 class5';

  /*
    Классы в виде обьекта
    Свойство ClassList поддерживается с IE10 + полифилы с IE8
    Classlist это псведомассив, его можно перебрать через for/forEach
  */

  newDivNode.classList.add('newClassToggle');
  // newDivNode.classList.toggle('newClassToggle');

  // // Проверяем наличие класса у блока
  var contains = newDivNode.classList.contains("class3"); // false
  console.log(contains);
  // // newDivNode.classList.add('StoreClass');
  newDivNode.classList.remove('class2');
  // newDivNode.classList.toggle('class1');
  console.log(newDivNode)


  // // Немного ивентов
  zButton = document.getElementById('button');
  zButton.onclick = function(event) {
    var Popup = document.getElementById('window');
        Popup.classList.toggle('hide');
  }
