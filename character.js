$(function() {
	cq(document.getElementById("myCanvas"))			
	
			.beginPath()
			.fillStyle("#FFF44A")
			.arc(100,100,8,0,Math.PI*2,true)
			.closePath()			
			.fill()		
	
			.beginPath()
			.strokeStyle("#000000")
			.arc(100,100,8,0,Math.PI*2,true)
			.closePath()			
			.stroke()			
							
			.beginPath()
			.arc(102,100,4,0.2*Math.PI,0.8*Math.PI,false)
			.stroke()
				
		;		

		drawEye(cq(document.getElementById("myCanvas")), 98, 97);
		drawEye(cq(document.getElementById("myCanvas")), 104, 97);
		
		window.blah = cq(document.getElementById("myCanvas"));
	
		window.com = new Image();
		window.com.src = "input/complexion.png";

		setTimeout(continueDraw, 1000);	
		
function drawEye(c,x,y) {	
	c.fillStyle("#000000").fillRect(x,y,2,2);
}

function continueDraw() {
	console.log('cont draw');
	var mask = cq(window.com).grayscaleToMask();				
	window.blah.fillMask(mask, "#225577").drawImage(window.com,124,100);	
}
		
});

