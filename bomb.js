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
  var imgWood = l("input/wood-tex.png");
  var imgGrass = l("input/grass.png");
  var imgMud = l("input/mud.png");
  
	simploader(function() {	
		cq(32,32)
		.drawImage(imgComplexion,0,0)
		.shiftHsl(0.41, null, null)		
		.drawImage(imgOcto, 0, 16)		
		.drawImage(imgFace, 6, 5)				
		.matchPalette(PALETTE)		
		.appendTo("#test2");
		
		cq(imgPistol).matchPalette(PALETTE).appendTo("#test2");	
		cq(imgPistol).matchPalette(PALETTE).resizePixel(3,3).appendTo("#test2");	
		cq(imgWeapon).matchPalette(PALETTE).appendTo("#test2");	
		cq(imgBlood).matchPalette(PALETTE).appendTo("#test2");
		
		cq(32,32)
			.drawImage(imgMud,0,0)
			.drawImage(imgGrass,0,0)
			.appendTo("#test2");
		
		cq(15,18)
			.drawImage(imgWood,0,0)
			.drawImage(imgWood,0,6)
			.drawImage(imgWood,0,12)
			.appendTo("#test2");	

		cq(20,20)
			.beginPath().strokeStyle("#000000").arc(10,10,8,0,Math.PI*2,true).closePath().stroke()										
			.beginPath().fillStyle("#202020").arc(10,10,7,0,Math.PI*2,true).closePath().fill()	
			.beginPath().strokeStyle("#303030").arc(10,10,7,0,Math.PI*2,true).closePath().stroke()					
			.beginPath().fillStyle("#70707A").arc(7,7,2,0,Math.PI*2,true).closePath().fill()						
			.beginPath().strokeStyle("#565653").arc(7,7,2,0,Math.PI*2,true).closePath().stroke()					
			.drawImage(imgSpark,14,-1)
			.matchPalette(PALETTE)
			.appendTo("#test2");
			
		drawWall("#669900").appendTo("#test2");
		drawWall("#3A1D00").appendTo("#test2");
		
		var test = cq(16,16);
		drawBrick(test,2,2,8,6, "#669900")
		.resizePixel(3,3)
		.appendTo("#test2");
		
		var noisy = cq(32,32);
		noise(noisy,32,32);
		noisy
		.shiftHsl(0.41, null, null)		
		.matchPalette(PALETTE)
		.appendTo('#test2');
	})		
});

function drawWall(fillC) {
	var brickWall = cq(32,32);
	var brickWidth = 8;
	var brickHeight = 6;
	for(var y=0; y<=32; y+=brickHeight) {
		var r = (y/brickHeight)%2;
		var rowOffset = r > 0 ? -(brickWidth/2) : 0;		
		for(var x=0; x<=32; x+=brickWidth) {
			drawBrick(brickWall,x + rowOffset,y,brickWidth,brickHeight, fillC);	
		}
	}
	brickWall.matchPalette(PALETTE);
	return brickWall;
}

function drawBrick(c, x, y, w, h, fillC) {
	return c
	.fillStyle(fillC).fillRect(x,y,w,h)
	.strokeStyle("#000000").strokeRect(x,y,w,h)
}

function noise(context,w,h) {
	for(i=0;i<w;i++) {
		for(j=0;j<h;j++) {			
			var num = 128 + Math.floor(Math.random()*56)
			context.fillStyle("rgb(" + num + "," + 0 + "," + 0 + ")");
			context.fillRect(i, j, 1, 1);
		}
	}
}