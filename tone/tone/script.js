var player;

$(document).ready(function(){


//analyse the frequency/amplitude of the incoming signal
		var fft = new Tone.FFT(32);

		//get the waveform data for the audio
		var waveform = new Tone.Waveform(128);

		player = new Tone.Player({
			"url" : "./Setlers-Shallow_Grayve.mp3",
			// "url" : "https://tonejs.github.io/examples/audio/FWDL.[mp3|ogg]",
			// "url" : "https://setle.rs/grayve.mp3",
      
			"loop" : true
		}).fan(fft, waveform).toMaster();

		console.log(player);
		// GUI //

		Interface.Button({
			key : 32,
			type : "toggle",
			text : "Start",
			activeText : "Stop",
			start : function(){
				alert("may or may not be buffered... gotta learn how promises work.")
				setTimeout(function(){
					player.start();
				}, 1000);
			},
			end : function(){
				player.stop();
			}
		});

		//drawing the FFT

		// var fftContext = $("<canvas>",{
		// 	"id" : "fft"
		// }).appendTo("#Content").get(0).getContext("2d");


		// var fftContext = $('#hey')//.getContext("2d");
		// console.log(fftContext);
		// var fftContext;

		setTimeout(function(){
			// console.log(render.canvas);
			// var fftContext = $('#hey').getContext("2d");
			fftContext = render.canvas.getContext("2d");
			console.log(fftContext);
			// sizeCanvases();

			loop();

		    //do what you need here
		}, 2000);



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

				boxA.vertices[0].y = Math.abs(values[10])*5;
				boxA.vertices[1].y = Math.abs(values[10])*5;

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
			// for (var i = 0, len = values.length; i < len; i++){
			// 	var x = canvasWidth * (i / len);
			// 	var y = (values[i] + 140) * 2;
			// 	fftContext.fillStyle = "rgba(0, 0, 0, " + i/len + ")";
			// 	fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
			// }
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
			canvasWidth = $("#fft").width();
			canvasHeight = $("#fft").height();
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
