// // addEventListener
  function ChangeBackColor( e ){
    var color = e.target.dataset.color;
        console.log( e.target, color );
        document.body.style.background = color;
  }

  // var buttonsSelector = document.querySelectorAll('._changeColor');

  // var btn = document.getElementById('test_btn');
  //     btn.addEventListener('click', function(){
  //       console.log('123123')
  //     });
  //     btn.removeEventListener('click', ChangeBackColor)
  //     btn.remove();
  // console.log(buttonsSelector);
  //
  // buttonsSelector.forEach( function( item, key ){
  //   console.log(key, item);
  //   item.addEventListener('click', ChangeBackColor);
  // });

  // var nButton = document.querySelector('._changeColor');
  //     nButton.removeEventListener('click', ChangeBackColor);

  /*
    Добавление несколько обработчиков на один элемент
  */

  function mFunc1(){ console.log('Log1');}
  function mFunc2(){ console.log('Log2');}
  function mFunc3(){ console.log('Log3');}

  MultiEvent.addEventListener('click', mFunc1);
  MultiEvent.addEventListener('click', mFunc2);
  MultiEvent.addEventListener('click', mFunc3);

  /*

    Итог:
      Есть 3 способа назнчить обработчик событий:

      Атрибут HTML: onclick="...".
      Свойство: elem.onclick = function.
      Специальный методы: elem.addEventListener

  */
