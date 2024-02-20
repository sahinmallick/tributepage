var mySong = document.getElementById('mySong');
var playbtn = document.getElementById('playbtn');
 playbtn.onclick= function(){
    if(mySong.paused){
        mySong.play();
        playbtn.src = "./images/play.svg";
    }
    else{
        mySong.pause();
        playbtn.src = "./images/pause.svg";
    }
 }