var render;

function percentX(percent) {
  return Math.round(percent/100 * window.innerWidth);
}
function percentY(percent) {
  return Math.round(percent/100 * window.innerHeight);
}

function Start() {

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

var startWidth = window.innerWidth;
var startHeight = window.innerHeight;
var audioBars = 32

// create a renderer
render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: startWidth,
        height: startHeight,
        pixelRatio: 1,
        background: '#fafafa',
        wireframeBackground: '#222',
        hasBounds: true,
        enabled: true,
        wireframes: true,
        showSleeping: true,
        showDebug: false,
        showBroadphase: false,
        showBounds: true,
        showVelocity: false,
        showCollisions: false,
        showSeparations: false,
        showAxes: true,
        showPositions: true,
        showAngleIndicator: true,
        showIds: true,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false,
    }
});

render.canvas.id = "fft";
// render.canvas.width=1000;
console.log(render);

// create two boxes and a ground

boxes = []

for(i=0;i<=audioBars; i++){
    var x = startWidth * (i / audioBars);
    // var y = (values[i] + 140) * 2;
    var y = 550;

    boxes.push(Bodies.rectangle(x, y, 80, 80, { isStatic: true }));
}

            // var barWidth = canvasWidth / fft.size;
            // for (var i = 0, len = values.length; i < len; i++){
            //  var x = canvasWidth * (i / len);
            //  var y = (values[i] + 140) * 2;
            //  fftContext.fillStyle = "rgba(0, 0, 0, " + i/len + ")";
            //  fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
            // }


boxA = Bodies.circle(600, 50, 80, 80);
boxB = Bodies.circle(450, 100, 80, 80);
ground = Bodies.rectangle(400, 610, startWidth, 60, { isStatic: true });

boxes.push(boxA);
boxes.push(boxB);


boxes.push(ground);
// add all of the bodies to the world
World.add(engine.world, boxes);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}