let html = document.querySelector("#html"); //获取#html
let style = document.querySelector("#style"); //获取#style

let string = `/*
你好，我是一名前端小白
今天要画的是一只叫八卦的大熊猫
这就让你见识一下我的前端功底 (っ•̀ω•́)っ✎⁾⁾
*/
body{
    color: red;
}
`;

let string2 = ""; //为了空格回车

let n = 0; //为了测量字符

html.innerHTML = string[n]; //确保首字符下标为0
console.log(string.length); //看下字符总长度
let step = () => {
  //给闹钟个插个电
  setTimeout(() => {
    //创建闹钟
    console.log(n); //输出当前的字符下标号
    console.log(string2); //输出当前字符
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2; //n 要打印出来
    style.innerHTML = string.substring(0, n);
    n += 1;
    if (n < string.length) {
      step(); //判断:如果n小于字符串总长度就重新运行
    } else {
    }
  }, 100);
};
step();
