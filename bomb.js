var PALETTE = ["#140c1c", "#442434", "#30346d", "#4e4a4e", "#854c30", "#346524", "#d04648", "#757161", "#597dce", "#d27d2c", "#8595a1", "#6daa2c", "#d2aa99", "#6dc2ca", "#dad45e", "#deeed6"];

$(function() {

  var image = new Image;
  simploader(image);
  image.src = "input/complexion2.png";
  
  var imgFace = new Image;
  simploader(imgFace);
  imgFace.src = "input/face.png";

	simploader(function() {
		var mask = cq(image).grayscaleToMask();	
		
		cq(image)
		.shiftHsl(0.41, null, null)
		.drawImage(imgFace, 6, 5)
		.matchPalette(PALETTE)
	//	.fillMask(mask, '#cc1144')
		.appendTo("#test2");
	})


	cq(document.getElementById("myCanvas"))			
			.fillStyle("#6FA6EA")
			.fillRect(0, 0, 640, 480)	
		
			.beginPath()
			.strokeStyle("#000000")
			.arc(10,10,8,0,Math.PI*2,true)
			.closePath()			
			.stroke()			
							
			.beginPath()
			.fillStyle("#202020")
			.arc(10,10,7,0,Math.PI*2,true)
			.closePath()
			.fill()	

			.beginPath()
			.strokeStyle("#303030")
			.arc(10,10,7,0,Math.PI*2,true)
			.closePath()
			.stroke()					
			
			.beginPath()
			.fillStyle("#70707A")
			.arc(7,7,2,0,Math.PI*2,true)
			.closePath()
			.fill()						
			
			.beginPath()
			.strokeStyle("#565653")					
			.arc(7,7,2,0,Math.PI*2,true)
			.closePath()
			.stroke()								
		;
						
		var spark = new Image();
		spark.src = "input/spark.png";
		spark.onload = function() {
			cq(document.getElementById("myCanvas")).drawImage(spark,14,-1);			
		};				
});