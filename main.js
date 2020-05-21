let html = document.querySelector("#html");
let string = `/*
你好，我是一名前端小白
今天要画的是一只叫八卦的大熊猫
这就让你见识一下我的前端功底 (っ•̀ω•́)っ✎⁾⁾
*/`;
let string2 = ""; //为了空格回车

let n = 0; //为了测量字符

html.innerHTML = string[n]; //确保首字符为0
console.log(string.length); //看下字符总长度
let step = () => {
  //闹钟的判断条件
  setTimeout(() => {
    //创建闹钟
    console.log(n); //当前输出的是哪一个字符
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if ((string[n] = "")) {
      string2 += string2 + "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2; //n 要打印出来
    n += 1;
    if (n < string.length) {
      step(); //判断:如果n小于字符串总长度就重新运行
    } else {
    }
  }, 100);
};
step();
