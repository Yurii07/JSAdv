!function(n){var t={};function e(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)e.d(r,u,function(t){return n[t]}.bind(null,u));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";function r(){return"Летать, "}function u(){return"Нестись, "}function o(){return"Плевать, "}function c(){return"Кушать, "}function a(){return"Охотиться, "}function i(){return"Петь, "}function l(){return"Переносить почту, "}function f(){return"Бегать. "}function s(n){this.name=n,this.canFly=r,this.canNestis=u,this.canPlevat=o,this.canEat=c,this.canHunter=a,this.canSing=i,this.transferMail=l,this.canRun=f}e.r(t),console.log("b.js");let d=new s("Голубь"),p=new s("Чайка");console.log(d.name+" Умеет : "+d.canFly()+d.canNestis()+d.canPlevat()+d.canEat()+d.canHunter()+d.canSing()+d.transferMail()+d.canRun()),console.log(p.name+" Умеет : "+p.canFly()+p.canNestis()+p.canPlevat()+p.canEat()+p.canHunter()+p.canSing()+p.transferMail()+p.canRun())}]);