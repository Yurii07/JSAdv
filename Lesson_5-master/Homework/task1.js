// function comment(name, text, avatar) {
//   this.name = name;
//   if(avatar !== undefined) {
// this avatar = avatar cto prihotit
//
//   }
//   object.setPrototypeOF(this, yourProto)
//
// }
var CommentsArray = ['myComment1', 'myComment2', 'myComment3', 'myComment4'];
var counter = 0;


var source = {
    src: 'https://js.cx/search/google.png',
    likes: function () {
        return ++counter;
        // console.log(counter,'111')
    }
};

function Ava(name, text, avatarUrl = '', likes) {

    this.name = name;
    this.text = text;
    if(avatarUrl === ''){
        this.avatarUrl = Ava.prototype["src"];
    } else {
        this.avatarUrl = avatarUrl;
    }
    this.likes = Ava.prototype["likes"];

}

Ava.prototype = source;

var AvaConsole = new Ava('name', 'text', '');


//Выводим изображение

document.getElementById("img").src = AvaConsole.avatarUrl;

//Вывщдим каунтер
function count () {
    clicks.innerHTML = AvaConsole.likes();
    console.log(clicks.innerHTML)
}

console.log(AvaConsole);



// первый способ который принимает массив коментариев и выводит на страницу
function Comment(arr) {
    for( var i = 0; i<arr.length; i++) {
        CommentsFeed.innerHTML += ' ' + arr[i] + "<br>" ;

    }
}
console.log(new Comment(CommentsArray));

// второй способ который принимает массив коментариев и выводит на страницу
// function Comment (number1,number2,number3,number4){
//     this.namber1 = CommentsArray[0];
//     this.namber2 = CommentsArray[1];
//     this.namber3 = CommentsArray[2];
//     this.namber4 = CommentsArray[3];
//
// } ;
// CommentsFeed.innerHTML = JSON.stringify(CommentsArray).replace(/,/g, '<br>');




// console.log(comment(1)); //вывод второго коментария





