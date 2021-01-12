var window00 = document.getElementById('window00');
var buttonH02 = document.getElementById('buttonH02');

var da = 0;
var shao = 1;

fuction howdao(da) {
  if (da === 0 && da !== shao) {
    window00.style['position'] = 'relative';
    alert(window.getComputedStyle(window00).getPropertyValue('position'));
  }
}