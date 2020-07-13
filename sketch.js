let hitCount = [];
// let hitCount = [170];

// [
//   {
//     key: 'q',
//     hitCount: 170,
//     sound: 'Thigh'
//   },
//   {
//     key: 'w',
//     hitCount: 180
//   }
//   ...
// ]

let sound;
let hitAmount = 3;


 for(let i = 0; i < 12; i++){
   hitCount.push(0);
}

$(document).keydown(function(e){

   //Left Part 
  if(e.key == "q"){
    //showText("Thigh")
      playSound("Thigh");
      doPopup('Thigh');
      bgImg();
    
    
      hitCount[0] += hitAmount;
      $('#Thigh-vis').css("background-color", "rgba(" +255+ ","+ 220+  "," +(170+hitCount[0]) + ")");
  }
  else if(e.key == "w"){
    //showText("Butt")
      playSound("Butt");
      doPopup('Butt');
      bgImg();
    
      hitCount[1] += hitAmount;
      $('#Butt-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[1]) + ")");  
  }
  else if(e.key == "e"){
    //typeText("Belly")
	  playSound("Belly");
    doPopup('Belly');
    bgImg();
    
    hitCount[2] += hitAmount;
      $('#Belly-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[2]) + ")");  
  }
  else if(e.key == "a"){
   // showText2("Cheek")
	  playSound("Cheek")
    doPopup('Cheek');
    bgImg();
    
    hitCount[3]+= hitAmount;
      $('#Cheek-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[3]) + ")");  
  }
  else if(e.key == "s"){
    //showText2("Clap")
	  playSound("Clap")
    doPopup('Clap');
    bgImg();
    
    hitCount[4]+= hitAmount;
      $('#Clap-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[4] )+ ")");  
  }
  else if(e.key == "d"){
    //showText2("Sole")
	  playSound("Sole")
    doPopup('Sole');
    bgImg();
 hitCount[5]+= hitAmount;
      $('#Sole-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[5] )+ ")");  
  }
  

  //Right part
  else if(e.key == "p"){
    //showText("Forehead")
	  playSound("Forehead")
    doPopup('Forehead');
    bgImg2();
 hitCount[6]+= hitAmount;
      $('#Forehead-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[6] )+ ")");  
  }
  else if(e.key == "o"){
    //showText("Calf")
	  playSound("Calf")
    doPopup('Calf');
    bgImg();
 hitCount[7]+= hitAmount;
      $('#Calf-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[7]) + ")");  
  }
  else if(e.key == "i"){
    //typeText("Chest")
	  playSound("Chest")
    doPopup('Chest');
    bgImg();
 hitCount[8]+= hitAmount;
      $('#Chest-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[8]) + ")");  
  }
  else if(e.key == "l"){
    //showText("Arm")
	  playSound("Arm")
    doPopup('Arm');
    bgImg();
 hitCount[9]+= hitAmount;
      $('#Arm-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[9]) + ")");  
  }
  else if(e.key == "k"){
    //showText("Shoulder")
	  playSound("Shoulder")
    doPopup('Shoulder');
    bgImg();

 hitCount[10]+= hitAmount;
      $('#Shoulder-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[10] )+ ")");  
  }
  else if(e.key == "j"){
    //typeText("Neck")
	  playSound("Neck")
    doPopup('Neck');
    bgImg();
    
 hitCount[11]+= hitAmount;
      $('#Neck-vis').css("background-color", "rgba(" + 255 + "," + 220 + "," + (170+hitCount[11]) + ")");  
  
  }

})  

//sounds overlap one another
function playSound (id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play();
    }
}


function doPopup(txt) {
  
  $('.popup_text').text(txt).fadeIn(80);
  $('.popup_text').text(txt).fadeOut(80);
  
}


//Add a bg image to text 

// function bgImg(){
// var bamImg = document.getElementById('bgImg');
// var newImg = new Image;
// newImg.onload = function(){
//   bamImg.src = this.src;
// }
//   newImg.src = "https://cdn.glitch.com/4e6d0ef6-3ef8-45d0-8705-67e72644e8a8%2FSlap.png?v=1577689646101";
//   }

function bgImg(){
  var bamImg = document.createElement("img");

  bamImg.src = "https://cdn.glitch.com/4e6d0ef6-3ef8-45d0-8705-67e72644e8a8%2FSlap.png?v=1577689646101";
  bamImg.width = "700";
  bamImg.style.position = "relative";
  bamImg.style.left= "-250px";
  bamImg.style.top  = "-330px";
  bamImg.style.zIndex = "-1";
  

  var father = document.getElementById("popup_text1");
  
  father.appendChild(bamImg);
    console.log(father);
}


function bgImg2(){
  var bamImg1 = document.createElement("img");

  bamImg1.src = "https://cdn.glitch.com/4e6d0ef6-3ef8-45d0-8705-67e72644e8a8%2FSlap.png?v=1577689646101";
  bamImg1.width = "880";
  bamImg1.style.position = "relative";
  bamImg1.style.left= "-250px";
  bamImg1.style.top  = "-420px";
  bamImg1.style.zIndex = "-1";
  

  var father1 = document.getElementById("popup_text1");
  
  father1.appendChild(bamImg1);
    
}



