var buttonH02 = document.getElementById('buttonH02');
var window00 = document.getElementById('window00');

var da = 0;

fuction howdao() {
  if (da === 1) {
    alert(window.getComputedStyle(window00).getPropertyValue('position'));
    body.style['display'] = 'grid';
    body.style['grid-template-columns'] = 'auto';
    body.style['grid-template-rows'] = 'auto';
    body.style['grid-column-gap'] = '0px';
    body.style['grid-auto-flow'] = 'column';
    window00.style['position'] = 'relative';
    print('87');
  }
}

fuction geonda() {
  da = 1;
}

return;