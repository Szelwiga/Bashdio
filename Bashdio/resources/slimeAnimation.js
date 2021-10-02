function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
var ctx=document.getElementById('slimy').getContext('2d');
var image=new Image();
image.onload=function(){
	ctx.fillStyle="#000", ctx.fillRect(0, 0, 500, 500);
    ctx.drawImage(image, 0, 0);
}
summon();
var slimeAttack=false, slimeHurt=false, slimeMove=false;
function slimeAgressive(){
	slimeAttack=true;
};
function touchSlime(){
	slimeHurt=true;
}
function kickSlime(){
	slimeMove=true;
}
var what, scene;
function done(){
	if (slimeAttack)	what="attack", scene=0, slimeAttack=false;
	if (slimeHurt)		what="hurt", scene=0, slimeHurt=false;
	if (slimeMove)		what="move", scene=0, slimeMove=false;
	if (what=="attack" && scene==5)	what="idle", scene=0;
	if (what=="hurt" && scene==4)	what="idle", scene=0;
	if (what=="move" && scene==4)	what="idle", scene=0;
	if (what=="idle" && scene==4)	what="idle", scene=0;
	image.src='resources/slime/slime-'+what+'-'+scene+'.png';
	if (what=="idle")
		scene++, setTimeout(done, 500);
	else
		scene++, setTimeout(done, 250);
}
function summon(){
	image.src='resources/slime/slime-die-3.png';
	setTimeout(summon1, 250);
}
function summon1(){
	image.src='resources/slime/slime-die-2.png';
	setTimeout(summon2, 250);
}
function summon2(){
	image.src='resources/slime/slime-die-1.png';
	setTimeout(summon3, 250);
}
function summon3(){
	image.src='resources/slime/slime-die-0.png';
	what="idle", scene=0, setTimeout(done, 250);
}
