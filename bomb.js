$(function() {
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