

        /*
          call, bind, apply

          Apply:
            fun.apply(thisArg, [argsArray]);

        */

        // function add(c, d) {
        //   console.log('add context', this);
        //   console.log('add sum', this.a + this.b + c + d);
        // }
        // add(3,4); //NaN

        // var ten = {
        //   a: 1,
        //   b: 2,
        // };
        // add.call(ten, 3, 4); // 10

        // var x = [1,2];
        // add.apply(ten, x);

        // function Product(name, price) {
        //   this.name = name;
        //   this.price = price;
        //
        //   if (price < 0) {
        //     throw RangeError('Cannot create product ' + this.name + ' with a negative price');
        //   }
        // }

        // function Food(name, price) {
        //   Product.call(this, name, price);
        //   this.category = 'food';
        // }
        //
        // function Toy(name, price) {
        //   Product.call(this, name, price);
        //   this.category = 'toy';
        // }
        //
        // var phone = new Product('Phone', 1000);
        // console.log(phone);
        // var cheese = new Food('feta', 5);
        // var fun = new Toy('robot', 40);
        // console.log( fun, cheese );



        /*
          Bind
        */


    var meowButton = document.getElementById('meowButton');
        // console.log( meowButton );

        // var myObj = {
        //   sound: 'Guten Morgen',
        //   talk: function(){
        //     console.log('myObj', this, this.sound );
        //   }
        // }
        // myObj.talk();

        // meowButton.addEventListener(
        //   'click',
        //   myObj.talk
        // );

        // var Sasha = { name: 'Sasha', sound: 'Sasha say hello!'};
        // myObj.talk.call(Sasha);
        // // testBtn.addEventListener('click', bindedTalk);
        // var x = myObj.talk.bind(Sasha);
        // console.log('function x');
        // x();

        /*
          Частичный вызов функции
        */

        function SimlpleFunc( a, b, message ){
          console.log( message, a + b, this );
        }
        var SimpleCarrying = SimlpleFunc.bind(null, 1);
        var TestFunc = SimlpleFunc.bind(null, 1, 2, "test");
            SimpleCarrying(6, 'hello');
            SimlpleFunc(5, 6, 'bye')
            TestFunc();


        function ManyArgyments( another, brick, in_the, wall){
          console.log('ManyArgyments', another, brick, in_the, wall);
        }
        //
        var CarryingFunc = ManyArgyments.bind(null, 'We', 'don\'t', 'need', 'no education');
            CarryingFunc();
