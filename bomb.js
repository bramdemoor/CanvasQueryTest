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
  var imgParticle = l("input/particleTexture.png");
  var imgNeon = l("input/neon.png");
  
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
		cq(imgNeon).shiftHsl(0.41, 1, 0.2).appendTo("#test2");
		cq(imgParticle).scale(0.5,0.5).shiftHsl(0.41, 0.6, null).appendTo("#test2");
		
		cq(32,32)
			.drawImage(imgMud,0,0)
			.drawImage(imgGrass,0,0)
			.appendTo("#test2");
		
		cq(15,18)
			.drawImage(imgWood,0,0)
			.drawImage(imgWood,0,6)
			.drawImage(imgWood,0,12)
			.appendTo("#test2");

		// Motion trail
		cq(32,16)
			.fillStyle("#999999").fillRect(9,0,4,2)
			.fillStyle("#666666").fillRect(12,0,4,2)
			.fillStyle("#000000").fillRect(15,0,4,2)			
			.resizePixel(3,3).appendTo("#test2");
			

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
		drawBrick(test,2,2,8,6, randomColor())
		.resizePixel(3,3)
		.appendTo("#test2");
		
		var noisy = cq(32,32);
		noise(noisy,32,32);
		noisy
		.shiftHsl(0.41, null, null)		
		.matchPalette(PALETTE)
		.appendTo('#test2');		
		
		var wolkske = cq(60,60);
		cloud(wolkske);
		wolkske.appendTo("#test2");
		
		var pp = cq(100,100);
		
		var pattern = pp.context.createPattern(imgMud, 'repeat');
		
		pp
        .rect(0, 0, 100, 100)
        .fillStyle(pattern)
        .fill()    
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

function cloud(context) {
      context.beginPath();
      context.moveTo(17, 8);
      context.bezierCurveTo(13, 10, 13, 15, 23, 15);
      context.bezierCurveTo(25, 18, 32, 18, 34, 15);
      context.bezierCurveTo(42, 15, 42, 12, 39, 10);
      context.bezierCurveTo(43, 4, 37, 3, 34, 5);
      context.bezierCurveTo(32, 5, 25, 2, 25, 5);
      context.bezierCurveTo(20, 5, 15, 2, 17, 8);
      context.closePath();
      context.fillStyle('#8ED6FF');
      context.fill();
      context.strokeStyle('black');
      context.stroke();
}

function randomColor() {
	return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}