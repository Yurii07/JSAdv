/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

var train = {
  name: 'POEZD',
  speed: 80,
  passengers: 20,
  go: function(){
    this.speed = 100;
    console.log('Train is moving with speed ' + this.speed + ' and ' + this.passengers + ' passangers');
  },
  stop: function(){
    this.speed = 0;
     console.log('Train is mstoped. Speed is ' + this.speed );
  },
  pickUp: function( newPassengers ){
    this.passengers += Number(newPassengers);
    console.log('We get ' + newPassengers + ' new passangers. Total:' + this.passengers)
  }


};


train.go();
train.stop();
train.pickUp(312);
train.go();
