// js是弱型別語言
// var 變數
let var1;
let var2 = 123;


// 印文字
// document.write()

// 查詢型別
// typeof()

// 變數開頭
// a-zA-Z$_
// 變數之後的字元
// [a-zA-Z$_]*
document.write(var1 + "<br>");
var1 = 123;
document.write(typeof(var1) + "<br>");
var1 = 12.3;
document.write(typeof(var1) + "<br>");
var1 = true;
document.write(typeof(var1) + "<br>");
var1 = '12.3';
document.write(typeof(var1) + "<br>");

// const 常數
// const 未宣告會噴錯:Uncaught SyntaxError: Missing initializer in const declaration
// const 第一次給值稱作初始化,其他之後的動作稱作指派
// const 不能進行指派 噴錯:Uncaught TypeError: Assignment to constant variable.
const name = 'Jackie';

// 以下獲得相同結果
document.write("My name is " + name + "<br>");
document.write(`My name is ${name}<br>`);

// 小算盤
let a = 10,b = 3;
document.write(`${a} + ${b} = ${a+b}`);
