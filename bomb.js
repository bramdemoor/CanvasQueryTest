var PALETTE = ["#140c1c", "#442434", "#30346d", "#4e4a4e", "#854c30", "#346524", "#d04648", "#757161", "#597dce", "#d27d2c", "#8595a1", "#6daa2c", "#d2aa99", "#6dc2ca", "#dad45e", "#deeed6"];

function l(path) {
	var tmp = new Image; 
	simploader(tmp); 
	tmp.src = path;
	return tmp;
}

$(function() {
  var imgBlood = l("input/blood.png");
  var imgComplexion = l("input/complexion2.png");
  var imgFace = l("input/face.png");
  var imgPistol = l("input/pistol.png");
  var imgSpark = l("input/spark.png");
  var imgOcto = l("input/octolegs.png");
  var imgWeapon = l("input/crazyweapon.png");
  
	simploader(function() {	
		cq(32,32)
		.drawImage(imgComplexion,0,0)
		.shiftHsl(0.41, null, null)		
		.drawImage(imgOcto, 0, 16)		
		.drawImage(imgFace, 6, 5)				
		.matchPalette(PALETTE)		
		.appendTo("#test2");
		
		cq(imgPistol).matchPalette(PALETTE).appendTo("#test2");	
		cq(imgWeapon).matchPalette(PALETTE).appendTo("#test2");	
		cq(imgBlood).matchPalette(PALETTE).appendTo("#test2");	

		cq(20,20)
			.beginPath().strokeStyle("#000000").arc(10,10,8,0,Math.PI*2,true).closePath().stroke()										
			.beginPath().fillStyle("#202020").arc(10,10,7,0,Math.PI*2,true).closePath().fill()	
			.beginPath().strokeStyle("#303030").arc(10,10,7,0,Math.PI*2,true).closePath().stroke()					
			.beginPath().fillStyle("#70707A").arc(7,7,2,0,Math.PI*2,true).closePath().fill()						
			.beginPath().strokeStyle("#565653").arc(7,7,2,0,Math.PI*2,true).closePath().stroke()					
			.drawImage(imgSpark,14,-1)
			.appendTo("#test2");
	})		
});