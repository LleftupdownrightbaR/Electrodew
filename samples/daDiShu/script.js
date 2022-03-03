//javascript裡雙斜槓為註解，順道一提HTML註解是<!--J格4註解-->，CSS註解/*ㄏㄏ*/。
addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'daDiShu';
});
//這是當頁面載入時就執行函數，執行→將id為test的html元素「裡面的HTML(.innerHTML)」變成一個內容為daDiShu的「字串」。
//字串，英文String，在單引號或雙引號內'單引號字串'或"雙引號字串"，用於純文字，搭配函數(函式 fuction)也可以作為一種判斷依據，比如上面的'#test'。
//HTML元素id，你可以把它想成學號，一個學生也就一個號，如果要用js選擇器，可以表示為document.querySelector('#某個id')或者document.getElementById("一個id")→注意不用加#(井號)。
//HTML元素的class，你可以想成班級，很多學生都可以是一個班級，如果要用js選擇器，可以表示為document.querySelector('.某個class')。


//var →英文變量variable的縮寫，js裡用來設置一個變數，用var可以設置的變數(變量)可以在任意地方重新設置。
var test = document.querySelector('#test');//設置一個叫test的傢伙，它是用來指定一個id叫做test的網頁元素。
//文件(document，這個html的dom操作，dom→文物件模型縮寫→document object model).請求(query)選擇器(Selector)(一個字串，用來指定element、id、class);。
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var boxNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];//這是一個變數，有一個數組(陣列 array)，用來放置一些連續的資料，可以是數字，也可以是字串，甚至可以塞物件
var num = 0;//變數num等於0。

var rN = function() {
  var boxNormal = 'background-color: rgba(235, 245, 255, .6);filter: drop-shadow(rgba(0, 0, 0, .2) 5vmin 5vmin 10px) brightness(1);transform: translateX(0vmin) translateY(0vmin);';
  var boxHighlight = 'filter: drop-shadow(rgba(0, 0, 0, .1) 5vmin 5vmin 10px) brightness(1.1);transform: translateX(-1vmin) translateY(-1vmin);';
  num = boxNum[Math.floor(Math.random()*9)];//把變數num變成一個叫boxNum的數組裡的第[數學.取最大整數(數學.隨機()乘以9)]個資料，。
//Math.floor()，取一個小於等於括號裡的數字的最大整數。
//Math.random()，隨機0到1的數字，含小數點後的浮點數→非整數。
  test.innerHTML = '數字：' + num;
  if(num===1) {
    box1.style.cssText = boxHighlight;
  } else {
    box1.style.cssText = boxNormal;
  };
  if(num===2) {
    box2.style.cssText = boxHighlight;
  } else {
    box2.style.cssText = boxNormal;
  };
  if(num===3) {
    box3.style.cssText = boxHighlight;
  } else {
    box3.style.cssText = boxNormal;
  };
  if(num===4) {
    box4.style.cssText = boxHighlight;
  } else {
    box4.style.cssText = boxNormal;
  };
  if(num===5) {
    box5.style.cssText = boxHighlight;
  } else {
    box5.style.cssText = boxNormal;
  };
  if(num===6) {
    box6.style.cssText = boxHighlight;
  } else {
    box6.style.cssText = boxNormal;
  };
  if(num===7) {
    box7.style.cssText = boxHighlight;
  } else {
    box7.style.cssText = boxNormal;
  };
  if(num===8) {
    box8.style.cssText = boxHighlight;
  } else {
    box8.style.cssText = boxNormal;
  };
  if(num===9) {
    box9.style.cssText = boxHighlight;
  } else {
    box9.style.cssText = boxNormal;
  };
};//把一個變數設置為函數。

setInterval('rN()', 500);//每隔500毫秒執行函數rN()。