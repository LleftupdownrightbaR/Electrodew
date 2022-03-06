//javascript裡雙斜槓為註解，順道一提HTML註解是<!--J格4註解-->，CSS註解/*ㄏㄏ*/。
addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'mièShǔXiānFēng';
});
//這是當頁面載入時就執行函數，執行→將id為test的html元素「裡面的HTML(.innerHTML)」變成一個內容為meShuShianFong的「字串」。
//字串，英文String，在單引號或雙引號內'單引號字串'或"雙引號字串"，用於純文字，搭配函數(函式 fuction)也可以作為一種判斷依據，比如上面的'#test'。
//HTML元素id，你可以把它想成學號，一個學生也就一個號，如果要用js選擇器，可以表示為document.querySelector('#某個id')或者document.getElementById("一個id")→注意不用加#(井號)。
//HTML元素的class，你可以想成班級，很多學生都可以是一個班級，如果要用js選擇器，可以表示為document.querySelector('.某個class')。

let da = (+new Date());

var dn;
var upt;

var uptime = function() {
  dn = Date.now();
  upt = (dn - da) / 1000;
  return upt;
};

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var box10 = document.getElementById("box10");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");
var box13 = document.getElementById("box13");
var box14 = document.getElementById("box14");
var box15 = document.getElementById("box15");
var box16 = document.getElementById("box16");
var box17 = document.getElementById("box17");
var box18 = document.getElementById("box18");
var box19 = document.getElementById("box19");
var box20 = document.getElementById("box20");
var box21 = document.getElementById("box21");
var box22 = document.getElementById("box22");
var box23 = document.getElementById("box23");
var box24 = document.getElementById("box24");
var box25 = document.getElementById("box25");
var box26 = document.getElementById("box26");
var box27 = document.getElementById("box27");
var box28 = document.getElementById("box28");
//var →英文變量variable的縮寫，js裡用來設置一個變數，用var可以設置的變數(變量)可以在任意地方重新設置。
var test = document.querySelector('#test');//設置一個叫test的傢伙，它是用來指定一個id叫做test的網頁元素。
//文件(document，這個html的dom操作，dom→文物件模型縮寫→document object model).請求(query)選擇器(Selector)(一個字串，用來指定element、id、class);。

var boxNum = [
  [1, 2, 3, 29, 29, 29],
  [4, 5, 6, 7, 8, 29],
  [9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 29],
  [26, 27, 28, 29, 29, 29] ];//這是一個變數，有一個數組(陣列 array)，用來放置一些連續的資料，可以是數字，也可以是字串、數組，甚至可以塞物件。
var boxId = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28];
var num = 0;//變數num等於0。

var boxNormal = 'background-color: rgba(235, 245, 255, .6);filter: drop-shadow(rgba(0, 0, 0, .2) 1.4814814815rem 1.4814814815rem 10px) brightness(1);transform: translateX(0) translateY(0);';
var boxHighlight = 'filter: drop-shadow(rgba(0, 0, 0, .1) 1.4814814815rem 1.4814814815rem 10px) brightness(1.1);transform: translateX(-0.5925925926rem) translateY(-0.5925925926rem);';

var rN = function() {
  var rColumn = Math.floor(Math.random() * 6);
  var rRow = Math.floor(Math.random() * 6);
//數學.取最大整數(數學.隨機()乘以6)。

  num = boxNum[rColumn][rRow];//把變數num變成一個叫boxNum的二維數組裡的第[rColumn]個數組裡，第[rRow]個資料。
//Math.floor()，取一個小於等於括號裡的數字的最大整數。
//Math.random()，隨機0到1的數字，含小數點後的浮點數→非整數。
  test.innerHTML = '數字：' + num + '<br>經過時間：' + upt + '秒';
  //if(num = -1) {
    //boxId[num - 1].style.cssText = boxHighlight;
  //};
};//把一個變數設置為函數。

box1.addEventListener("touchstart", () => {
  box1.style.cssText = boxHighlight;
});
box2.addEventListener("touchstart", () => {
  box2.style.cssText = boxHighlight;
});
box3.addEventListener("touchstart", () => {
  box3.style.cssText = boxHighlight;
});
box4.addEventListener("touchstart", () => {
  box4.style.cssText = boxHighlight;
});
box5.addEventListener("touchstart", () => {
  box5.style.cssText = boxHighlight;
});
box6.addEventListener("touchstart", () => {
  box6.style.cssText = boxHighlight;
});
box7.addEventListener("touchstart", () => {
  box7.style.cssText = boxHighlight;
});
box8.addEventListener("touchstart", () => {
  box8.style.cssText = boxHighlight;
});
box9.addEventListener("touchstart", () => {
  box9.style.cssText = boxHighlight;
});
box10.addEventListener("touchstart", () => {
  box10.style.cssText = boxHighlight;
});
box11.addEventListener("touchstart", () => {
  box11.style.cssText = boxHighlight;
});
box12.addEventListener("touchstart", () => {
  box12.style.cssText = boxHighlight;
});
box13.addEventListener("touchstart", () => {
  box13.style.cssText = boxHighlight;
});
box14.addEventListener("touchstart", () => {
  box14.style.cssText = boxHighlight;
});
box15.addEventListener("touchstart", () => {
  box15.style.cssText = boxHighlight;
});
box16.addEventListener("touchstart", () => {
  box16.style.cssText = boxHighlight;
});
box17.addEventListener("touchstart", () => {
  box17.style.cssText = boxHighlight;
});
box18.addEventListener("touchstart", () => {
  box18.style.cssText = boxHighlight;
});
box19.addEventListener("touchstart", () => {
  box19.style.cssText = boxHighlight;
});
box20.addEventListener("touchstart", () => {
  box20.style.cssText = boxHighlight;
});
box21.addEventListener("touchstart", () => {
  box21.style.cssText = boxHighlight;
});
box22.addEventListener("touchstart", () => {
  box22.style.cssText = boxHighlight;
});
box23.addEventListener("touchstart", () => {
  box23.style.cssText = boxHighlight;
});
box24.addEventListener("touchstart", () => {
  box24.style.cssText = boxHighlight;
});
box25.addEventListener("touchstart", () => {
  box25.style.cssText = boxHighlight;
});
box26.addEventListener("touchstart", () => {
  box26.style.cssText = boxHighlight;
});
box27.addEventListener("touchstart", () => {
  box27.style.cssText = boxHighlight;
});
box28.addEventListener("touchstart", () => {
  box28.style.cssText = boxHighlight;
});

setInterval('rN(), uptime()', 200);//每隔200毫秒執行函數rN()。