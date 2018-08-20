/*
  Arrow functions + default values
  Docs: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
    // const myFuncName = param => console.log( param );

    const FnName = (params) => params * 2;
    const z = param => console.log( param ); // return expresion
    const y = ( param, param2 ) => {
      console.log( param, param2 );
      return 'hello';
    };

    const shortFunc = (param, param2) => param+param2;

    // const o = function( param, param2 ){
    //   console.log( param, param2 );
    // };

    const Duble = a => a * 2;
    let Duble4 = Duble(4);
    console.log(Duble4);

    const Test = (one, two) => {
      console.log( one, two );
      return one + two;
    }

    console.log( Test(10, 5) );
