// Функция-конструктор для создания объекта Human.

// function Human(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }

// // Создание 2 экземпляров класса Human
// var firstHuman = new Human("Ivan", "Ivanov");
// var secondHuman = new Human("Petr", "Petrov");

    // console.log( firstHuman, secondHuman )
    function Test(){}

// Функция-конструктор для создания объекта Human.
function Human(name, surname) {
    this.name = name;
    this.surname = surname;
    this.myProp = x;
    this.showName = function () {
      console.log("имя человека: " + this.name + " " + this.surname );
    }
}

// Создание 2 экземпляров класса Human

var firstHuman = new Human("Ivan", "Ivanov");
var secondHuman = new Human("Petr", "Petrov");
    secondHuman.myProp = false;
    console.log( firstHuman, secondHuman )
// firstHuman.showName();
// secondHuman.showName();
