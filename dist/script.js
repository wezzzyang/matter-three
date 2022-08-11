class createMatter {
  Engine = Matter.Engine;
  Render = Matter.Render;
  Runner = Matter.Runner;
  Bodies = Matter.Bodies;
  Composite = Matter.Composite;
  bodys = [];
  constructor() {
    const { Engine, Render, Runner, Bodies, Composite } = this;
    // create an engine
    this.engine = Engine.create();

    // create a renderer
    this.render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: window.innerWidth / 2,
        height: window.innerHeight,
      },
    });

    // create two boxes and a ground
    let boxA = Bodies.rectangle(400, 200, 80, 80);
    let boxB = Bodies.rectangle(450, 50, 80, 80);
    let ground = Bodies.rectangle(400, 910, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    this.composite = Composite.add(this.engine.world, [boxA, boxB, ground]);

    // run the renderer
    Render.run(this.render);

    // create runner
    this.runner = Runner.create({});

    // run the engine
    Runner.run(this.runner, this.engine);
  }
}

class createThree {
  renderer;
  camrea;
  scene;

  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor("#14151F", 1);

    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      3000
    );
    this.camera.position.x = 0;
    this.camera.position.y = 200;
    this.camera.position.z = 800;

    new THREE.OrbitControls(this.camera);

    this.scene = new THREE.Scene();
    let renderFlash = () => {
      requestAnimationFrame(renderFlash); // 避免不必要得刷新
      // requestAnimationFrame(renderFlash);
      this.renderer.render(this.scene, this.camera);
    };
    renderFlash();
  }
}

class contactThreeMatter {
  three = new createThree();
  matter = new createMatter();
  constructor() {
    this.createIrregular(
      30,
      30,
      [30, 30, 0, 40, 40, 0, 50, 50, 0, 100, 100, 0],
      {
        isStatic: true,
      }
    );
    console.log("this.matter.Composite: ", this.matter.composite);
  }
  createIrregular(x, y, points, options = {}) {
    if (!Array.isArray(points)) return;
    if (!points.length) return;
    const vertexSets = [[]];
    for (let i = 0; i < points.length; i += 3) {
      vertexSets[0].push({
        x: points[i],
        y: points[i + 1],
      });
    }

    const irregular = this.matter.Bodies.fromVertices(
      x,
      y,
      vertexSets,
      options
    );
    this.matter.bodys.push(irregular);
    console.log("irregular: ", irregular);
    console.log("this.matter.engine: ", this.matter.engine);
    this.matter.Composite.add(this.matter.engine.world, irregular);
  }
}

new contactThreeMatter();
