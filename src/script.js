var DOT_SIZE = 30;
var X_START_POS = 0;
var Y_START_POS = 0;
// ‥‥‥‥‥‥‥‥‥‥‥‥‥□□□
// ‥‥‥‥‥‥〓〓〓〓〓‥‥□□□
// ‥‥‥‥‥〓〓〓〓〓〓〓〓〓□□
// ‥‥‥‥‥■■■□□■□‥■■■
// ‥‥‥‥■□■□□□■□□■■■
// ‥‥‥‥■□■■□□□■□□□■
// ‥‥‥‥■■□□□□■■■■■‥
// ‥‥‥‥‥‥□□□□□□□■‥‥
// ‥‥■■■■■〓■■■〓■‥‥‥
// ‥■■■■■■■〓■■■〓‥‥■
// □□■■■■■■〓〓〓〓〓‥‥■
// □□□‥〓〓■〓〓□〓〓□〓■■
// ‥□‥■〓〓〓〓〓〓〓〓〓〓■■
// ‥‥■■■〓〓〓〓〓〓〓〓〓■■
// ‥■■■〓〓〓〓〓〓〓‥‥‥‥‥
// ‥■‥‥〓〓〓〓‥‥‥‥‥‥‥‥
var dataSet = [
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BG",
  "BG",
  "BG",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "BK",
  "BK",
  "BG",
  "BG",
  "BG",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "BG",
  "BG",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BR",
  "BR",
  "BR",
  "BG",
  "BG",
  "BR",
  "BG",
  "BK",
  "RD",
  "RD",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "BR",
  "BG",
  "BR",
  "BG",
  "BG",
  "BG",
  "BR",
  "BG",
  "BG",
  "RD",
  "RD",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "BR",
  "BG",
  "BR",
  "BR",
  "BG",
  "BG",
  "BG",
  "BR",
  "BG",
  "BG",
  "BG",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "BR",
  "BR",
  "BG",
  "BG",
  "BG",
  "BG",
  "BR",
  "BR",
  "BR",
  "BR",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BG",
  "BG",
  "BG",
  "BG",
  "BG",
  "BG",
  "BG",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "BL",
  "RD",
  "RD",
  "RD",
  "BL",
  "RD",
  "BK",
  "BK",
  "BK",
  "BK",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "BL",
  "RD",
  "RD",
  "RD",
  "BL",
  "BK",
  "BK",
  "BR",
  "BG",
  "BG",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "RD",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BK",
  "BK",
  "BR",
  "BG",
  "BG",
  "BG",
  "BK",
  "BL",
  "BL",
  "RD",
  "BL",
  "BL",
  "YL",
  "BL",
  "BL",
  "YL",
  "BL",
  "BR",
  "BR",
  "BK",
  "BG",
  "BK",
  "BR",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BR",
  "BR",
  "BK",
  "BK",
  "BR",
  "BR",
  "BR",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BR",
  "BR",
  "BK",
  "BR",
  "BR",
  "BR",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BL",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BR",
  "BK",
  "BK",
  "BL",
  "BL",
  "BL",
  "BL",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
  "BK",
];

function getRgbColor(colorType) {
  var colorHash = {
    //"BK":"#000000", // black
    BK: "#f8fefd", // black
    WH: "#ffffff", // white
    BG: "#ffcccc", // beige
    BR: "#af5551", // brown
    RD: "#ff72d9", // red
    YL: "#fee965", // yellow
    GN: "#00ff00", // green
    WT: "#00ffff", // water
    BL: "#5999f1", // blue
    PR: "#800080", // purple
  };
  return colorHash[colorType];
}

var Engine = Matter.Engine,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner,
  Render = Matter.Render;

var engine, runner, renderMatter;

function init() {
  var renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  var camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );
  camera.position.x = 0;
  camera.position.y = 200;
  camera.position.z = 800;

  var controls = new THREE.OrbitControls(camera);
  var scene = new THREE.Scene();

  // create a Matter.js engine
  engine = Engine.create({
    timeScale: 1.2,
    gravity: {
      scale: 0.001,
    },
  });
  // create two circles and a ground
  var circles = [];
  for (var i = 0; i < dataSet.length; i++) {
    var x = X_START_POS + (i % 16) * (DOT_SIZE + 5) + 20;
    var y = Y_START_POS + Math.floor(i / 16) * (DOT_SIZE + 5);
    var s = DOT_SIZE;
    circles.push(Bodies.circle(x, y, s * 0.53, {}));
  }

  var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
  var wallA = Bodies.rectangle(0, 305, 60, 670, { isStatic: true });
  var wallB = Bodies.rectangle(800, 305, 60, 670, { isStatic: true });
  var ceiling = Bodies.rectangle(400, 0, 810, 60, { isStatic: true });

  // add all of the bodies to the world
  Composite.add(engine.world, circles);
  Composite.add(engine.world, [ground, wallA, wallB, ceiling]);

  var bodies = [];
  var material = new THREE.MeshPhongMaterial({
    color: 0x276a4b,
  });

  var group = new THREE.Object3D();
  scene.add(group);

  var pos = 0;
  for (var j = 0; j < engine.world.bodies.length; j++) {
    var b = engine.world.bodies[j];
    var w = b.bounds.max.x - b.bounds.min.x;
    var h = b.bounds.max.y - b.bounds.min.y;

    if (b.isStatic) {
      var geometry = new THREE.BoxGeometry(w, h, 170);
      m = new THREE.Mesh(geometry, material);
    } else {
      var color = getRgbColor(dataSet[pos]);
      var boxMaterial = new THREE.MeshPhongMaterial({ color: color });
      var boxGeometry = new THREE.CylinderGeometry(w / 2, w / 2, 150);
      m = new THREE.Mesh(boxGeometry, boxMaterial);
      m.rotation.x = Math.PI / 2;
      pos++;
    }

    group.add(m);
    bodies.push(m);
  }

  // back panel
  var m = new THREE.Mesh(new THREE.BoxGeometry(800, 600, 80), material);
  m.position.z = -40;
  group.add(m);

  // run the engine
  Engine.run(engine);

  dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(-30, 50, 40);
  scene.add(dirLight);

  function render() {
    requestAnimationFrame(render);

    for (var j = 0; j < engine.world.bodies.length; j++) {
      var b = engine.world.bodies[j].position;
      bodies[j].position.set(b.x - 405, -(b.y - 305), 0);
    }

    renderer.render(scene, camera);
  }

  renderMatter = Render.create({
    element: document.body,
    engine,
  });

  Render.run(renderMatter);
  // create runner
  var runner = Runner.create();

  // run the engine
  Runner.run(runner, engine);

  render();
}

window.addEventListener("load", init);
