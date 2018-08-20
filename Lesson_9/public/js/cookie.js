console.log('cookies works');
/*

  Cookies - специальный формат для сохранения данных который хранится в браузере.
  Сохраняет пары значений name-value:
  username = Vasya Pupkin
  document.cookie

*/

// Такая cookie - будет сохраненна в текущей сессии, но будет удалена после закрытия вкладки
// document.cookie = "itea=JsAdvanced05/2018";
// document.cookie = "token=asdkasd23oasd[adweqwioeq2]";

// Значение Cookie не могут содержать точку с запятой, запятые или символы разделители.
// Перед сохранением значение в cookie желательно вызвать функцию encodeURIComponent()
// при чтении значения надо вызвать decodeURIComponent()
// записанный таким способом cookie сохраняются в текущем сеансе браузера
// но удаляются после его закрытия.

// следующий cookie будет хранится браузером на проятжении 1 недели (60 * 60 * 24 * 7).
// document.cookie = "info=123;max-age=10";
// document.cookie = "info=123;max-age=10;path=/test";

// Установить дату на 1 день + от текущего момента.
// var date = new Date();
// date = date.setDate( date.getDate() + 1 );
// console.log( date );
//actors
// document.cookie = "info=123;max-age="+date+";path=/ac";

// var date = new Date(new Date().getTime() + 60 * 1000);
// document.cookie = "name=value; path=/; expires=" + date.toUTCString();
// toUTCString() преобразует дату в строку, используя часовой пояс UTC.

// Удаление куки:
// var date = new Date(0);
// document.cookie = "name=; path=/; expires=-1";

// var cookies = document.cookie.split(';');
// console.log( document.cookie );
// console.log('- - - - -');
// fetch('/', { credentials: "same-origin"});


function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;
  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}
function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  });
}

// setCookie('Itea', '13123');
// deleteCookie('Itea')
