
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */

  var btn = [].slice.call(document.querySelectorAll("button"));

  for (let i = 0; i< btn.length; i++) {
    btn[i].onclick = function(event) {
     var div = document.querySelector(`div[data-tab="${i+1}"]`);
     console.log(`div[data-tab="${i+1}"]`)
     div.classList.toggle('active')
// console.log(div)
hideAllTabs();
}
}

function hideAllTabs() {
 var divtab = document.querySelectorAll(".tab.active");
 if(divtab.length == 3) {
  setTimeout(function () {
    divtab.forEach( function(currentValue){
      currentValue.classList.remove('active');
    })
  },2000);
}
console.log(divtab)

}