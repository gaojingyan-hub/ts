let a: number = 123;
const h1 = document.createElement("h1");
h1.innerHTML = "Hello, I am Lison";
document.body.appendChild(h1);
// 为变量指定类型的语法是 变量：类型，如果没有指定类型，编辑器会根据你赋给这个变量的值来推断类型，ts指定类型跟js不同，首字母不大写 例number boolean
let num: number = 123;
// ts支持二，八，十，十六四种进制的数值
let num1: number;
num1 = 123;
num1 = "123"; // error 不能将类型"123"分配给类型"number"
num1 = 0b1111011; // 二进制的123
num1 = 0o173; // 八进制的123
num1 = 0x7b; // 十六进制的123
// 字符串字变量类型 例 let str:'lisin'
