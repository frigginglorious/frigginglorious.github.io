var player;


$(document).ready(function(){
//analyse the frequency/amplitude of the incoming signal
		var fft = new Tone.FFT(32);

		//get the waveform data for the audio
		// var waveform = new Tone.Waveform(128);


		player = new Tone.Player({
			"url" : "./Setlers-Shallow_Grayve.mp3",
			"loop" : true,
			// "volume": -40,
			"autostart" : "true",
		}).fan(fft).toMaster();

		// console.log(player);

		// Interface.Button({
		// 	key : 32,
		// 	type : "toggle",
		// 	text : "Loading",
		// 	activeText : "Stop",
		// 	start : function(){
		// 			player.start();
		// 	},
		// 	end : function(){
		// 		player.stop();
		// 	}
		// });

		// $(".Button").click(function(e){
		// 	e.preventDefault();
		// })

		//drawing the FFT

		// var fftContext = $("<canvas>",{
		// 	"id" : "fft"
		// }).appendTo("#Content").get(0).getContext("2d");

		setTimeout(function(){
			// $("#fft").height = 800;
			// console.log(render.canvas);
			// var fftContext = $('#hey').getContext("2d");
			// $('#hey')
			fftContext = render.canvas.getContext("2d");

			// fftContext.canvas.height = 1000;
			console.log(fftContext);
			// sizeCanvases();

			loop();

		    //do what you need here
		}, 200);



		function drawFFT(values){
			// var boxA = Bodies.rectangle(400, 200, 80, 80);
			// var boxB = Bodies.rectangle(450, 50, 80, 80);
			// var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

			// console.log(boxA.position.x);
			// console.log(values);
			// boxA.vertices[0].x = values[0];
			// boxA.vertices[0].y = values[1];
			if(isFinite(values[10])){
				// console.log(values[10]);

				boxes[0].vertices[0].y = Math.abs(values[10])*5;
				boxes[0].vertices[1].y = Math.abs(values[10])*5;

			}

			// if(isFinite(values[20])){
			// 	// console.log(values[10]);

			// 	boxB.vertices[0].y = Math.abs(values[20])*5;
			// 	boxB.vertices[1].y = Math.abs(values[20])*5;

			// }


			// boxA.position.y = Math.abs(values[11])*10;
			// console.log(boxA.position.x);

			//boxB.vertices[0].x
			// add all of the bodies to the world
			// World.add(engine.world, [boxA, boxB, ground]);
			// fftContext.clearRect(0, 0, canvasWidth, canvasHeight);

			var barWidth = canvasWidth / fft.size;
			for (var i = 0, len = values.length; i < len; i++){
				// var x = canvasWidth * (i / len);
				// var y = (values[i] + 140) * 2;
				// fftContext.fillStyle = "rgba(0, 0, 0, " + i/len + ")";
				// fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);

				if(isFinite(values[i])){
					// console.log(values[10]);

					boxes[i].vertices[0].y = Math.abs(values[i])*5;
					boxes[i].vertices[1].y = Math.abs(values[i])*5;

				}

			}
		}

		//the waveform data
		// var waveContext = $("<canvas>", {
		// 	"id" : "waveform"
		// }).appendTo("#Content").get(0).getContext("2d");
		// var waveformGradient;

		// function drawWaveform(values){
		// 	//draw the waveform
		// 	waveContext.clearRect(0, 0, canvasWidth, canvasHeight);
		// 	waveContext.beginPath();
		// 	waveContext.lineJoin = "round";
		// 	waveContext.lineWidth = 6;
		// 	waveContext.strokeStyle = waveformGradient;
		// 	waveContext.moveTo(0, (values[0] / 255) * canvasHeight);
		// 	for (var i = 1, len = values.length; i < len; i++){
		// 		var val = (values[i] + 1) / 2;
		// 		var x = canvasWidth * (i / len);
		// 		var y = val * canvasHeight;
		// 		waveContext.lineTo(x, y);
		// 	}
		// 	waveContext.stroke();
		// }

		//size the canvases
		var canvasWidth, canvasHeight;

		function sizeCanvases(){
			// canvasWidth = $("#fft").width();
			// canvasHeight = $("#fft").height();
			canvasWidth = $(document).width();

			canvasHeight = $(document).height();



			// waveContext.canvas.width = canvasWidth;
			fftContext.canvas.width = canvasWidth;
			// waveContext.canvas.height = canvasHeight;
			fftContext.canvas.height = canvasHeight;

			//make the gradient
			// waveformGradient = waveContext.createLinearGradient(0, 0, canvasWidth, canvasHeight);
			// waveformGradient.addColorStop(0, "#ddd");
			// waveformGradient.addColorStop(1, "#000");
		}

		$(window).resize(sizeCanvases);

		function loop(){
			setTimeout(function(){
				requestAnimationFrame(loop);
				//get the fft data and draw it
				var fftValues = fft.getValue();
				drawFFT(fftValues);
			}, 2);

			// requestAnimationFrame(loop);
			// //get the fft data and draw it
			// var fftValues = fft.getValue();
			// drawFFT(fftValues);

			//get the waveform valeus and draw it
			// var waveformValues = waveform.getValue();
			// drawWaveform(waveformValues);
		}
});
