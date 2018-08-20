
/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, 
    присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 
    с текстом "c"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
window.onload = function() {
    let colors = {
        background: 'purple',
        color: 'white'
    }

    function myCall(back) {
        document.body.style.background = back;
        document.body.style.color = this.color;
    }

    // myCall.call( colors, 'red' );
    function myBind() {
        console.log(this, this.background, this.color)
        document.body.style.background = this.background;
        document.body.style.color = this.color;
    }

    // myBind();
    var bindedFunc = myBind.bind(colors);
    bindedFunc();

    function myFraze(txt) {
        var h1 = document.querySelector('h1');
        h1.innerText = txt;
        document.body.style.background = this.background;
        document.body.style.color = this.color;
    }

    var arr = ['I know how binding works in JS']
    myFraze.apply(colors, arr)

}