/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }

*/
myFunction = function () {

    function Dog(name, breed, eat) {
        this.name = name;
        this.breed = breed;
        this.speed = 0;
        this.eat = eat;
        this.run = function (speed) {
            this.speed += speed;
            alert(this.name + ' бежит, скорость ' + this.speed);
        };

        this.stop = function () {
            this.speed = 0;
            alert(this.name + ' стоит');
        };
        this.eat = function () {
            this.eat = 'Ест';
            alert(this.name + this.eat);
        };
    };

    var animal = new Dog("шарик ", "дворовая");

    // console.log(animal);

    alert(animal.name, animal.breed, ' бежит со скоростью ', animal.speed); // 0, начальная скорость
    animal.run(2); // Зверь бежит, скорость 3
    animal.run(10); // Зверь бежит, скорость 12
    animal.stop(); // Зверь стоит
    animal.eat('ест корм');

    for (key in animal) {
        // console.log('asd')
        console.log(key, animal[key]);
    }

}