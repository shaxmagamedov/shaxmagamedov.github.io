var Vkor;
var ball_0=0,ball_1=0,ball_2=0
var r1;
$(document).ready(function(){
	setpro();
$("#product").draggable({
	containment:"parent",
	snap:"div[id^='kor_']",
	helper: cloner,
	start:str,
	stop: setpro
})
$("div[id^='kor_']").droppable({
    drop: drople
});
})
function setpro(){
var r=Math.floor(Math.random()*3);
r1=r;
$("#product").css("backgroundImage","url("+r+".png)");
$("#product").css("opacity","1");
}

function cloner(){
return "<div id='clone' style='background-image: url("+r1+".png)'></div>"
}
function str(){
	$("#product").css("opacity","0");
}

function drople(){
Vkor= this.id;
Vkor= Vkor.replace("kor_","")
var bgcheck= $("#product").css("background-image");
bgcheck = bgcheck.replace(/^.*[\\\/]/,'').replace('.png")','')
if (bgcheck==0 && bgcheck==Vkor){
ball_0++;
document.getElementById("ball_0").innerHTML=ball_0;
}
if (bgcheck==1 && bgcheck==Vkor){
ball_1++;
document.getElementById("ball_1").innerHTML=ball_1;
} else{if(bgcheck==0 && Vkor==1 ){ball_1=0;document.getElementById("ball_1").innerHTML=ball_1;	}

}
if (bgcheck==2 && bgcheck==Vkor){
ball_2++;
document.getElementById("ball_2").innerHTML=ball_2;
} else{if(bgcheck==0 && Vkor==2 ){ball_2=0;document.getElementById("ball_2").innerHTML=ball_2;}}

}
