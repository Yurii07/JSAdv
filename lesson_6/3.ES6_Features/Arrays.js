/*
  Arrays Methods
  Docs:
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    * Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every

*/

  const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
  const NOT_ARRAY = "";

  // Array.isArray();
  // -- Проверка является ли массивом: Array.isArray( Arr );
  // console.log ( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log ( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  // -- Array.forEach
    // var LogName = item => console.log( 'log:', item );
    // ITEA_COURSES.forEach( LogName );
    // console.log('- - - - -');
    // ITEA_COURSES.forEach( function( item, i){
    //   console.log('log2:', item);
    // });

  // -- Array.filter
  // Create new array;

  // const StringLength = item => item.length < 18;
  // // if expresion === true return item
  // var filtredArray = ITEA_COURSES.filter(StringLength);
  // console.log('filtredArray:', filtredArray);
  // console.log('Array:', ITEA_COURSES);

  // -- Array.map
  // Create new array;

  // var ReverseName = name => {
  //   // console.log( name.split("") );
  //   console.log( name.split("").reverse().join(""));
  //   // if ( name.length < 10 ){
  //   //   console.log( name.split("").reverse().join("") );
  //   //   return name;
  //   // }
  //   // return name.split("").reverse().join("")
  // };
  // var MappedArray = ITEA_COURSES.map(ReverseName);
  // console.log(MappedArray);

  // -- every/some
  // const LessThen5 = item => item.length < 10;
  // var ArraySome = ITEA_COURSES.some(LessThen5);
  // console.log('ArraySome', ArraySome);
  //
  // var ArrayEvery = ITEA_COURSES.every( function( item ){
  //   if( item.length > 7){
  //     return true;
  //   }
  // });
  // console.log('ArrayEvery', ArrayEvery);



  // -- reduce/reduceRight
  //
  const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
  const REDUCE_ARRAY2 = [
    { id: 0, name: 'Item'},
    { id: 1, name: 'Name'},
    { id: 2, name: 'Index'},
    { id: 3, name: 'Object'}
  ];
  //
  var result = REDUCE_ARRAY.reduceRight( function( sum, current){
    console.log("Sum", sum, "Current:", current);
    return sum + current;
  });
  console.log('Result sum:',result);
  // //

  var resultReverse = REDUCE_ARRAY2.reduceRight( function( sum, current){

      console.log("multiply - <:", sum, current.name);
      return sum + current.name;

  }, '');
  // console.log('resultReverse', resultReverse);
