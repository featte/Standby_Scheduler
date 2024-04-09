function showTime() {
    var malaysiaTime = new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });
    document.getElementById('currentTime').innerHTML = malaysiaTime;
}

showTime();

setInterval(function () {
    showTime();
}, 1000);


 function resizeIframe() {
    var iframe = document.getElementById('iframe');
    iframe.style.width = window.innerWidth + 'px';
    iframe.style.height = window.innerHeight + 'px';
  }

  window.addEventListener('resize', resizeIframe);
  resizeIframe(); // Call resizeIframe initially to set the correct size







