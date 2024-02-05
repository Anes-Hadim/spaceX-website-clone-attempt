document.querySelector('video').playbackRate = 0.6;

function show() {
  document.querySelector('.side').style.transform='scaleX(1)';
  document.querySelector('.menu2').style.opacity=1;
  document.querySelector('.menu2').style.zIndex=2
  document.getElementById('l1').style.transform='rotate(45deg) translateY(4px)';
  document.getElementById('l2').style.transform='rotate(-45deg) translateY(-2px)';
}

function hide() {
  document.querySelector('.side').style.transform='scaleX(0)';
  document.querySelector('.menu2').style.opacity=0;
  document.querySelector('.menu2').style.zIndex=0;
  document.getElementById('l1').style.transform='rotate(0) translateY(4px)';
  document.getElementById('l2').style.transform='rotate(0) translateY(-2px)';
}