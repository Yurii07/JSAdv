// console.log('a.js');

import fly from "./b";
import nestis from "./nestis";
import plevat from "./plevat";
import eat from "./eat";
import hunter from "./hunter";
import sing from "./sing";
import mail from "./TransferMail";
import run from "./run";

function Bird(name) {
    this.name = name;
    this.canFly = fly;
    this.canNestis = nestis;
    this.canPlevat = plevat;
    this.canEat = eat;
    this.canHunter = hunter;
    this.canSing = sing;
    this.transferMail = mail;
    this.canRun = run;
}

let bird = new Bird('Голубь');
let chaika = new Bird('Чайка');

console.log( bird.name + ' Умеет : ' + bird.canFly() + bird.canNestis() + bird.canPlevat() + bird.canEat()+ bird.canHunter() + bird.canSing()+ bird.transferMail()+ bird.canRun());

console.log( chaika.name + ' Умеет : ' + chaika.canFly() + chaika.canNestis() + chaika.canPlevat() + chaika.canEat()+ chaika.canHunter() + chaika.canSing()+ chaika.transferMail()+ chaika.canRun());
