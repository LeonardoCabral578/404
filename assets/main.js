window.onload = updateClock;

var totalTime = 5;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if(totalTime==0){
    window.location.href = "https://m.youtube.com/watch?v=umMqQ5_h63M&feature=youtu.be";
  }else{
    totalTime-=1;
    setTimeout("updateClock()",1000);
  }
}