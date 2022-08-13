const width = window.innerWidth / 2;
const height = window.innerHeight;
class createMatter {
  Engine = Matter.Engine;
  Render = Matter.Render;
  Runner = Matter.Runner;
  Bodies = Matter.Bodies;
  Body = Matter.Body;
  Composite = Matter.Composite;
  Composites = Matter.Composites;
  Constraint = Matter.Constraint;
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
        width,
        height,
      },
    });
    // let ground = Bodies.rectangle(width / 2, height, width, 30, {
    //   isStatic: true,
    // });
    // let groundA = Bodies.rectangle(0, height / 2, 30, height, {
    //   isStatic: true,
    // });
    let groundB = Bodies.rectangle(width, height / 2, 30, height, {
      isStatic: true,
    });
    // let groundC = Bodies.rectangle(width / 2, -30, width, 60, {
    //   isStatic: true,
    // });
    // var group = this.Body.nextGroup(true);

    // var ropeB = this.Composites.stack(350, 0, 5, 1, 10, 10, (x, y, index) => {
    //   return this.Bodies.circle(x, y, 0.1, {
    //     collisionFilter: { group: group },
    //     isStatic: index === 0 ? true : false,
    //     frictionAir: 0.05,
    //     density: 0.1,
    //     mass: 0.0001,
    //   });
    // });
    // this.Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    //   stiffness: 0.8,
    //   length: 100,
    //   render: { type: "line" },
    // });
    // this.Composite.add(
    //   ropeB,
    //   this.Constraint.create({
    //     bodyB: ropeB.bodies[0],
    //     pointB: { x: -20, y: 0 },
    //     pointA: {
    //       x: ropeB.bodies[0].position.x,
    //       y: ropeB.bodies[0].position.y,
    //     },
    //     stiffness: 0.5,
    //   })
    // );
    // let change = 5;
    // let changeX = ropeB.bodies[0].position.x;
    // setInterval(() => {
    //   // ropeB.bodies[0].position.x =
    //   //   Math.random() > 0.5
    //   //     ? changeX + Math.random() * 200
    //   //     : changeX - Math.random() * 200;
    //   ropeB.bodies[0].position.x += change;
    //   if (ropeB.bodies[0].position.x - changeX > 100) {
    //     change = -10;
    //   }
    //   if (ropeB.bodies[0].position.x - changeX < -100) {
    //     change = 10;
    //   }
    // }, 16);

    // Composite.add(this.engine.world, [ropeB]);

    // add all of the bodies to the world
    this.composite = Composite.add(this.engine.world, [
      // ground,
      // groundA,
      groundB,
      // groundC,
    ]);

    // run the renderer
    Render.run(this.render);

    // // create runner vb
    this.runner = Runner.create({});

    // // run the engine
    Runner.run(this.runner, this.engine);
  }

  createIrregular(x, y, points, options = {}) {
    if (!Array.isArray(points) || points.length < 3) return;
    x += width / 2;
    y += height / 2;
    const vertexSets = [[]];
    for (let i = 0; i < points.length; i += 3) {
      vertexSets[0].push({
        x: -points[i],
        y: points[i + 1],
      });
    }

    // vertexSets[0].push(vertexSets[0][0]);
    // console.log("vertexSets: ", vertexSets);
    const irregular = this.Bodies.fromVertices(x, y, vertexSets, {
      angle: Math.PI,
      ...options,
    });
    this.bodys.push(irregular);
    this.Composite.add(this.engine.world, irregular);
  }

  getCenterForThree(body) {
    return {
      x: body.position.x - width / 2,
      y: body.position.y - height / 2,
    };
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
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor("#14151F", 1);

    document.body.appendChild(this.renderer.domElement);

    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 800;

    // new THREE.OrbitControls(this.camera);

    this.scene = new THREE.Scene();
  }
  createCircle() {
    const geometry = new THREE.TorusKnotGeometry(100, 30, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    this.scene.add(torusKnot);
    return torusKnot;
  }
}

class contactThreeMatter {
  three = new createThree();
  matter = new createMatter();
  testGift = [];
  sprite;
  constructor() {
    const map = new THREE.TextureLoader().load("eye.png");
    const material = new THREE.SpriteMaterial({
      map: map,
      color: 0xffffff,
      wireframe: true,
    });
    this.sprite = new THREE.Sprite(material);
    this.sprite.geometry.scale(50, 50, 1);
    const circle = this.three.createCircle();
    console.dir(this.three.renderer.domElement.width);
    // circle.visible = false;
    circle.geometry.rotateZ(Math.PI / 4);
    this.matter.createIrregular(
      circle.position.x,
      circle.position.y,
      [...circle.geometry.attributes.position.array],
      {
        restitution: 0.8,
        isStatic: true,
      }
    );
    this.makeCircle();
    this.render();
    this.render();
  }
  render() {
    let renderFlash = () => {
      requestAnimationFrame(renderFlash); // 避免不必要得刷新
      this.update();
      this.three.renderer.render(this.three.scene, this.three.camera);
    };
    renderFlash();
  }
  update() {
    Math.random() < 0.1 &&
      (() => {
        console.log(
          "this.matter.engine.world: ",
          this.matter.engine.world.bodies.length
        );
        console.log("secne: ", this.three.scene.children.length);
      })();
    this.makeCircle();
    this.testGift = this.testGift.filter(({ three, matter }) => {
      let bool = false;
      if (!matter) return false;
      if (
        matter.position.x >= -300 &&
        matter.position.x <= width + 300 &&
        matter.position.y >= -300 &&
        matter.position.y <= height + 300
      ) {
        bool = true;
      } else {
      }
      if (!bool) {
        this.three.scene.remove(three);
        this.matter.Composite.remove(this.matter.engine.world, matter);
      }
      return bool;
    });
    this.testGift.forEach(({ three, matter }) => {
      const position = this.matter.getCenterForThree(matter);
      three.position.x = position.x;
      three.position.y = -position.y;
      three.geometry.rotateZ(matter.angle);
    });
  }
  makeCircle() {
    const sprite = this.sprite.clone();
    sprite.geometry = sprite.geometry.clone();
    this.three.scene.add(sprite);
    // const geometry = new THREE.BoxGeometry(25, 25, 1);
    // const material = new THREE.MeshBasicMaterial({
    //   color: 0xffff00,
    // });
    // const circle = new THREE.Mesh(geometry, material);
    // this.three.scene.add(circle);
    const matterCircle = Matter.Bodies.circle(width / 2, -30, 20, {
      restitution: 0.8,
      friction: 1,
      frictionAir: 0.005,
    });
    this.matter.Composite.add(this.matter.engine.world, matterCircle);
    this.testGift.push({
      three: sprite,
      matter: matterCircle,
    });
  }
  createTestGift() {}
}

new contactThreeMatter();
