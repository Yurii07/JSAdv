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
    likes: function addLike() {
        return ++counter;
        // console.log(counter,'111')
    }
}

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

var AvaConsole = new Ava('asd', 'sdg', '');

AvaConsole.likes();

console.log(AvaConsole)

function comment(number) {
    for( var i = 0; i<CommentsArray.length; i++) {
        CommentsFeed.innerHTML += ' ' + CommentsArray[i]
    }
    return CommentsArray[number];
}

console.log(comment(1)); //вывод второго коментария
// console.log(avatar.avatarUrl());





// var CommentsArray = [myComment1, myComment2, myComment3, myComment4];
//
// function Ava(name, text, avatarUrl) {
//     this.name = name;
//     this.text = text;
// // create image  + add scr to img and append to div
//     this.avatarUrl = function () {
//         var img = document.createElement('img');
//         img.src = 'https://js.cx/search/google.png';
//         var block = document.getElementById('block1');
//         block1.appendChild(img);
//     };
//
// // counter likes
//     this.likes = 0;
//     this.like = function () {
//         this.likes++;
//     }
// } // end of function Ava
// //arr
// function Comment(comment) {
//     this.comment = comment;
// }
//
//
//
//
// var myComment1 = new Comment('1');
// var myComment2 = new Comment('2');
// var myComment3 = new Comment('3');
// var myComment4 = new Comment('4');
// console.log(myComment1,myComment2,myComment3,myComment4);
// var avatar = new Ava('asd', 'sdg', 'ghsdfh');
// console.log(avatar);
// avatar.like();
// console.log(avatar);
// console.log(avatar.avatarUrl());