var player;

var fftContext;

var multiplier = .4;

function removeLoadScreen() {
  $("#loadScreen").hide(1000);
}

$(document).ready(function() {

  Start();

    var force = (-0.0055 * charBox.mass);
  Matter.Body.applyForce(charBox, charBox.position, { x: 0, y: force });

    // var canvas = document.getElementById('fft');
    // var context = canvas.getContext('2d');
    render.canvas.addEventListener('mousedown', function(evt) {
      var mousePos = getMousePos(render.canvas, evt);
      direction = 1

      if (mousePos.x < charBox.position.x){
        direction *= -1
      }
      moveIt(direction);
      // writeMessage(canvas, message);
    }, false);

    render.canvas.addEventListener('mouseup', function(evt) {
      mouseIsDown = false;
      console.log("updawg");

      // writeMessage(canvas, message);
    }, false);

  //analyse the frequency/amplitude of the incoming signal
  var fft = new Tone.FFT(32);

  var meter = new Tone.Meter();

  player = new Tone.Player({
    "url": "./Setlers-I_Swim.mp3",
    "loop": true,
    "volume": -80,
    "autostart": "true",
    "onload": removeLoadScreen(),
  }).fan(fft).connect(meter).toMaster();


  setTimeout(function() {

    fftContext = render.canvas.getContext("2d");

    // fftContext.canvas.height = 1000;
    console.log(fftContext);
    // sizeCanvases();

    loop();

    //do what you need here
  }, 200);



  function drawFFT(values) {

    var barWidth = startWidth / fft.size;
    for (var i = 0, len = values.length; i < len; i++) {
      // var x = canvasWidth * (i / len);
      // var y = (values[i] + 140) * 2;
      // fftContext.fillStyle = "rgba(0, 0, 0, " + i/len + ")";
      // fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);

      if (isFinite(values[i])) {
        // console.log(values[10]);

        leftBoxes[i].vertices[1].x = Math.abs(values[i]) * multiplier;
        leftBoxes[i].vertices[2].x = Math.abs(values[i]) * multiplier;

      }

    }
    for (var i = 0, len = values.length; i < len; i++) {

      setX = startWidth - Math.abs(values[i]) * multiplier;
      // console.log(setX);
      if (isFinite(values[i])) {
        // console.log(values[10]);

        rightBoxes[i].vertices[0].x = setX;
        rightBoxes[i].vertices[3].x = setX;

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

  function sizeCanvases() {
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

  // $(window).resize(sizeCanvases);

  function loop() {
    // setTimeout(function(){
    requestAnimationFrame(loop);
    //get the fft data and draw it
    var fftValues = fft.getValue();
    drawFFT(fftValues);
    drawMeter();
    if (mouseIsDown){
      console.log("down town");
      console.log(charBox.position.x);
      // var mousePos = getMousePos(render.canvas, evt);
      moveIt(direction);
    }


    // }, 2);

    // requestAnimationFrame(loop);
    // //get the fft data and draw it
    // var fftValues = fft.getValue();
    // drawFFT(fftValues);

    //get the waveform valeus and draw it
    // var waveformValues = waveform.getValue();
    // drawWaveform(waveformValues);
    // charVec = Matter.Vector.create(startWidth/2 - (charSize/2), startHeight - 20);

    // charBox.force(charVec);
    // addChar();

    var force = (-0.00001 * charBox.mass);
    // Matter.Body.applyForce(charBox, charBox.position, { x: 0, y: force });


  }


  function drawMeter() {
    var level = meter.getValue();
    level = (level + 1) / 2;
    // level = Tone.gainToDb(level); //scale it between 0 - 1
    // console.log(level);
    if (level > 0 && level < 1) {
      // console.log(level);

      var scaleIt = level;
      // Matter.Body.scale(boxB, scaleIt, scaleIt);
      // boxB.render.circleRadius = level * 50;
      // boxB.circleRadius = level * 50;
      var my_gradient = fftContext.createLinearGradient(0, 0, 0, 170);
      my_gradient.addColorStop(0, "black");
      my_gradient.addColorStop(level, "white");
      fftContext.fillStyle = my_gradient;

      centerBox.render.lineWidth = level * 20;
      centerBox.render.strokeStyle = "blue";
      centerBox.render.fillStyle = my_gradient;
      // Matter.Body.set(boxB, {
      // 	render: {
      // 		sprite: {
      // 		// texture: './img/face2.jpg',
      // 			xScale: .10,
      // 			yScale: .10,

      // 	}}
      // }, scaleIt);
      // boxB.render.sprite.YScale = scaleIt;
      // boxB.render.sprite.YScale(scaleIt);

      // console.log(boxB.circleRadius);
    }
    // boxB.circleRadius = level * 80;


    // boxB.circleRadius
    // meterContext.clearRect(0, 0, startWidth, startHeight);
    // meterContext.fillStyle = meterGraident;
    // meterContext.fillRect(0, 0, startWidth, startHeight);
    // meterContext.fillStyle = "white";
    // meterContext.fillRect(startWidth * level, 0, startWidth, startHeight);
  }
});