var render;

var World;
var Engine;
var engine;

var mouseIsDown;
var direction;

function percentX(percent) {
  return Math.round(percent / 100 * window.innerWidth);
}

function percentY(percent) {
  return Math.round(percent / 100 * window.innerHeight);
}





var startWidth = 360; //window.innerWidth;
var startHeight = 640; // window.innerHeight;
var midCenter = startWidth / 2;
var charSize = startWidth / 36;
var wallBoxSize = 19;

var audioBars;

function Start() {

  // module aliases
  Engine = Matter.Engine;
  Render = Matter.Render;
  World = Matter.World;
  Bodies = Matter.Bodies;
  Common = Matter.Common;
  MouseConstraint = Matter.MouseConstraint;
  Mouse = Matter.Mouse;
  Events = Matter.Events;
  Composites = Matter.Composites;




  // create an engine
  engine = Engine.create(),
    world = engine.world;


  audioBars = 32

  // create a renderer
  render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: startWidth,
      height: startHeight,
      pixelRatio: 1,
      background: '#060506',
      showAngleIndicator: false,
      wireframes: false,
      // wireframeBackground: '#222',
      // // hasBounds: true,
      // enabled: true,
      // // wireframes: true,
      // showSleeping: true,
      // showDebug: false,
      // showBroadphase: false,
      // // showBounds: true,
      // showVelocity: false,
      // showCollisions: false,
      // showSeparations: false,
      showAxes: true,
      showPositions: true,
      showAngleIndicator: true,
      showIds: true,
      // showShadows: false,
      // showVertexNumbers: false,
      // showConvexHulls: false,
      // showInternalEdges: false,
      showMousePosition: false
    }
  });

  render.canvas.id = "fft";

  context = render.canvas.getContext("2d");
  console.log(context)

  // mouseConstraint = MouseConstraint.create(Engine, {
  //   element: context
  // });

  // MouseConstraint.create(Engine, {
  //  element: context
  // });


  // render.canvas.width=1000;
  console.log(render);

  // create two boxes and a ground

  boxes = [];
  leftBoxes = [];
  rightBoxes = [];

  for (i = 0; i <= audioBars; i++) {
    var y = startHeight * (i / audioBars);
    var x = 0;

    leftBoxes.push(Bodies.rectangle(x, y, wallBoxSize, wallBoxSize, {
      isStatic: true,
    }));
  }
  // for (i = 0; i <= audioBars; i++) {
  for (i = audioBars; i > 0; i--) {
    var y = startHeight * (i / audioBars);
    var x = startWidth;

    rightBoxes.push(Bodies.rectangle(x, y, wallBoxSize, wallBoxSize, {
      isStatic: true,
    }));
  }
  // var barWidth = canvasWidth / fft.size;
  // for (var i = 0, len = values.length; i < len; i++){
  //  var x = canvasWidth * (i / len);
  //  var y = (values[i] + 140) * 2;
  //  fftContext.fillStyle = "rgba(0, 0, 0, " + i/len + ")";
  //  fftContext.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
  // }


  boxA = Bodies.circle(100, 0, 80, {
    restitution: .9,
    render: {
      sprite: {
        // texture: 'https://raw.githubusercontent.com/liabru/matter-js/2560a681/demo/img/ball.png',
        texture: './img/logo512px.png',
        xScale: .25,
        yScale: .25,
      }
    },
  });
  Matter.Body.setMass(boxA, .01);
  // Matter.Body.restitution(boxA, .8);

  boxB = Bodies.circle(450, 100, 80, {
    mass: .01,
    restitution: .9,
    render: {
      sprite: {
        // texture: 'https://raw.githubusercontent.com/liabru/matter-js/2560a681/demo/img/ball.png'
        texture: './img/logo512px.png',
        xScale: .25,
        yScale: .25,
      }
    },
  });
  // Matter.Body.setMass(boxB, .0001);
  // "./img/logo512px.png"

  ground = Bodies.rectangle(0, startHeight, startWidth * 2, 10, {
    isStatic: true,
    collisionFilter: {
      category: wallCategory,
    },

  });
  // leftWall = Bodies.rectangle(0, 400, 60, startHeight, { isStatic: true, visible: false });
  // rightWall = Bodies.rectangle(startWidth, 400, 60, startHeight, { isStatic: true, visible: false });
  centerBox = Bodies.rectangle(200, 200, 200, 200, { isStatic: true, visible: false });

  charBox = Bodies.rectangle(startWidth / 2 - (charSize / 2), startHeight - 80, 50, 50, { isStatic: false });

  // boxes.push(boxA);
  // boxes.push(boxB);
  // boxes.push(centerBox);

  // boxes.push(charBox);

  boxes.push(ground);
  // boxes.push(leftWall);
  // boxes.push(rightWall);



  // add all of the bodies to the world
  World.add(engine.world, boxes);
  World.add(engine.world, leftBoxes);
  World.add(engine.world, rightBoxes);


  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);

  // charVec = Matter.Vector.create(startWidth / 2 - (charSize / 2), startHeight - 500);
  // charVec = Matter.Vector.create(50, 50);

  // charBox.force(charVec);
  // Matter.Body.setVelocity(charBox, charVec)
  // let force = (-0.013) ;
  // Matter.Body.applyForce(charBox, charBox.position, {x:0,y:force});


  World.add(engine.world, charBox);




  var mouser = function() {


    context = render.canvas.getContext('2d');

    // render.canvas.addEventListener('mousemove', function(evt) {
    //   var mousePos = getMousePos(render.canvas, evt);
    //   var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //   console.log(message);
    //   // writeMessage(canvas, message);
    // }, false);




    // console.log(getMousePos(render.canvas,evt));
    // return Bodies.circle(400, 20, 23, {
    //     density: 0.0005,
    //     frictionAir: 0.06,
    //     restitution: 0.3,
    //     friction: 0.01,
    //     render: {
    //         sprite: {
    //             texture: 'face2.png',
    //         }
    //     }
    // });
  }


mouser();
  // console.log(mouseConstraint);


  // Events.on(mouseConstraint, 'mousedown', function(event) {
  //     console.log(event)

  //     // console.log(getMousePos(canvas,event))
  //     var mousePosition = event.mouse.position;
  //     mp = mousePosition;
  //     mouseIsDown = true;
  //     let amount = .001;
  //     console.log(mousePosition);
  //     console.log(charBox.position.x);
  //     if (event.mouse.position.x < charBox.position.x){
  //       amount *= -1
  //     }
  //     let force = (amount * charBox.mass);
  //     Matter.Body.applyForce(charBox, charBox.position, {x:force,y:0});

  // });

  // Events.on(mouseConstraint, 'mouseup', function(event) {
  //     var mousePosition = event.mouse.position;
  //     mp = mousePosition;
  //     mouseIsDown = false;
  // });




  // $(document).on('click', function(evt) {
  //   var canvas = document.getElementById('fft');
  //   var context = canvas.getContext('2d');
  //   // canvas.addEventListener('mousemove', function(evt) {
  //   var mousePos = getMousePos(canvas, evt);
  //   console.log(mousePos);
  //   ball = Bodies.circle(mousePos["x"], mousePos["y"], 70, {
  //     density: 0.0005,
  //     // frictionAir: 0.06,
  //     restitution: 0.9,
  //     // friction: 0.01,
  //     render: {
  //       sprite: {
  //         texture: './img/face2.jpg',
  //         xScale: .10,
  //         yScale: .10,

  //       }
  //     }
  //   });
  //   World.add(engine.world, ball);

  //   // })
  //   // ball();
  // })


  // var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
  //   if (Common.random() > 0.35) {
  //     return Bodies.rectangle(x, y, 64, 64, {
  //       render: {
  //         strokeStyle: '#ffffff',
  //         sprite: {
  //           texture: '//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/box.png'
  //         }
  //       }
  //     });
  //   } else {
  //     return Bodies.circle(x, y, 46, {
  //       density: 0.0005,
  //       frictionAir: 0.06,
  //       restitution: 0.3,
  //       friction: 0.01,
  //       render: {
  //         sprite: {
  //           texture: '//cdn.rawgit.com/liabru/matter-js/2560a681/demo/img/ball.png'
  //         }
  //       }
  //     });
  //   }
  // });

  // World.add(world, stack);

}

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

function moveIt(direction){
      // var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
      // console.log(message);

      // var mousePosition = event.mouse.position;
      // mp = mousePos;
      mouseIsDown = true;
      var amount = .001 * direction;


      var force = (amount * charBox.mass);
      Matter.Body.applyForce(charBox, charBox.position, {x:force,y:0});
}
