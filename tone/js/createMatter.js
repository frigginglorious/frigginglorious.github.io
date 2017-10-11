var render;
function Start() {

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
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
boxA = Bodies.rectangle(400, 200, 80, 80);
boxB = Bodies.rectangle(450, 50, 80, 80);
ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}