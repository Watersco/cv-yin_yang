let html = document.querySelector("#html"); //获取#html
let style = document.querySelector("#style"); //获取#style

let string = `
/*
你好，我是一名前端小白
今天要画的是一只叫八卦的大熊猫
这就让你见识一下我的前端功底 (っ•̀ω•́)っ✎⁾⁾
*/

/*首先，画一个正方形*/
#div1 {
    height: 400px;
    width: 400px;
    border: 2px solid grey;
  }  
  
 /*看我把它变胖，变成熊猫色*/
#div1 {
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(7,14,23,1) 100%);
}

/*再让它长出两只熊猫耳朵*/
#div1::before,#div1::after {
    border: 1px solid grey;
    border-radius: 50%;
}
#div1::before {
    background-color: #fff;
}
#div1::after {
    background-color: #000;
}

/*再加两个黑眼圈*/
#div1::before {
    border:none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
}
#div1::after{
    border: none;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(0,0,0,1) 35%, rgba(7,14,23,1) 100%);
}
/*完成！
  什么，你说不像？
  仔细看，它在睡觉zzZ*/
  
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
  }, 0);
};
step();
