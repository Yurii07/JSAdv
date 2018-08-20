/*

  Модули в JS
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

  Так как для экспорта и импорта нету родной поддержки в
  браузерах, то нам понадобится сборщик который это умеет делать

  Выбор пал на вебпак

  npm i
  npm run cli

  Затестим - в консоли наберем команду webpack
*/
// Для экспорта и импорта обязательно нужно имя
// import {str} from './modules/1';
import $ from 'jquery';

$('html').html('<h1>Hello!</h1>');


import Classes from './classes';
let { test1 } = Classes;
// console.log('index module1', str);
console.log( 'Classes', Classes, test1 );

// let { prop1, prop2 } = x;
// console.log( prop1, prop2 );

// import someObj from './modules/2';
// console.log(someObj);
// // //
// import { mArray, mObj, User } from './modules/3';
// console.log( mArray, mObj, User);
// // //
// const Butch = new User('Butch');
// console.log(Butch);
