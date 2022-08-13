const map = new THREE.TextureLoader().load("eye.png");
const material = new THREE.SpriteMaterial({ map: map });

const sprite = new THREE.Sprite(material);
scene.add(sprite);
