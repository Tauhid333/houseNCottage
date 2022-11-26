const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

camera.position.set(70, 70, 300);
camera.rotation.y = 6.6;
// default THREE.PCFShadowMap

//Create a DirectionalLight and turn on shadows for the light

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// scene.add(directionalLight);

const loading = new THREE.TextureLoader();
loading.load("images2/image.webp", function (texture) {
  scene.background = texture;
});

// grass texture

const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 32);
const grass = new THREE.TextureLoader().load("images2/grass.jpg");

const planeMaterial = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: grass,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, -30, 0);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

const piler = new THREE.Group();

const sidepilerbody = new THREE.TextureLoader().load("images2/wall4.jpg");

const pilerBody = new THREE.CylinderGeometry(20, 20, 130, 60, 1);
const pilerBodyM = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: sidepilerbody,
});
const piler1 = new THREE.Mesh(pilerBody, pilerBodyM);
// capsule.rotateX(1.5708);

piler.add(piler1);

const sidepilerhead = new THREE.TextureLoader().load("images2/hutroof.jpg");

const pilerhead = new THREE.CylinderGeometry(0, 30, 100, 60, 1);
const pilerheadM = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: sidepilerhead,
});
const piler2 = new THREE.Mesh(pilerhead, pilerheadM);
// capsule.rotateX(1.5708);
// cottage.castShadow = true; //default is false
// cottage.receiveShadow = false;
piler2.position.y = 100;
piler.castShadow = true; //default is false
piler.receiveShadow = false;
piler.add(piler2);
// scene.add(piler);

const mainpilerbody = new THREE.TextureLoader().load("images2/c4.jpg");

const anotherpiler = new THREE.Group();
const anotherpilerbody = new THREE.CylinderGeometry(70, 70, 130, 60, 1, true);
const anotherpilerbodyM = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: mainpilerbody,
});
const secondpiler = new THREE.Mesh(anotherpilerbody, anotherpilerbodyM);
secondpiler.position.x = 80;
secondpiler.position.z = -30;
anotherpiler.add(secondpiler);

const mainpilerhead = new THREE.TextureLoader().load("images2/hutroof.jpg");

const anotherpilerhead = new THREE.CylinderGeometry(0, 80, 100, 60, 1);
const anotherpilerheadM = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: mainpilerhead,
});
const secondpilerhead = new THREE.Mesh(anotherpilerhead, anotherpilerheadM);
secondpilerhead.position.y = 110;
secondpilerhead.position.x = 80;
secondpilerhead.position.z = -30;
anotherpiler.add(secondpilerhead);
// scene.add(anotherpiler);

// window side

const windoww = new THREE.TorusGeometry(10, 1, 16, 100);
const windowM = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(windoww, windowM);
torus.position.set(5, 30, 20);
// scene.add(torus);

// door

const doorTex = new THREE.TextureLoader().load("images2/cd1.jpg");

const geometry = new THREE.BoxGeometry(30, 40, 1);
const material = new THREE.MeshPhongMaterial({ map: doorTex });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(80, -10, 40);
// scene.add(cube);

// window

const windowTex = new THREE.TextureLoader().load("images2/cw1.png");

const circle = new THREE.CircleGeometry(10, 32);
const circleM = new THREE.MeshPhongMaterial({ map: windowTex });
const circleWin = new THREE.Mesh(circle, circleM);
circleWin.position.set(5, 30, 20);
scene.add(circleWin);

piler.add(torus);
anotherpiler.add(cube);

const cottage = new THREE.Group();
cottage.add(piler);
cottage.add(anotherpiler);
cottage.add(circleWin);
scene.add(cottage);
cottage.position.set(130, 10, -50);
cottage.rotation.y = -13;

// building ------------------

const bulding = new THREE.BoxGeometry(100, 200, 50);
const buldingM = new THREE.ShaderMaterial({
  uniforms: {
    globeTexture: {
      value: new THREE.TextureLoader().load("images2/images.jpg"),
    },
  },

  vertexShader: document.getElementById("vertexShader1").textContent,
  fragmentShader: document.getElementById("fragmentShader1").textContent,
});
const build = new THREE.Mesh(bulding, buldingM);
scene.add(build);

build.position.set(-100, 60, -20);
build.rotation.y = 12.9;

const bulding2 = new THREE.BoxGeometry(100, 200, 50);
const buldingM2 = new THREE.ShaderMaterial({
  uniforms: {
    globeTexture: {
      value: new THREE.TextureLoader().load("images2/download.jpg"),
    },
  },

  vertexShader: document.getElementById("vertexShader2").textContent,
  fragmentShader: document.getElementById("fragmentShader2").textContent,
});
const build2 = new THREE.Mesh(bulding2, buldingM2);
scene.add(build2);

const bulding3 = new THREE.CylinderGeometry(50, 50, 300, 60, 1);
const buldingM3 = new THREE.MeshPhongMaterial({
  wireframe: false,
  map: new THREE.TextureLoader().load("images2/cbuilding.jpg"),
});
const build3 = new THREE.Mesh(bulding3, buldingM3);
build3.position.set(-180, 100, 0);
scene.add(build3);

// buildin ends

var arr = [
  "images2/c2.jpg",
  "images2/c3.jpg",
  "images2/c4.jpg",
  "images2/wall2.jpg",
  "images2/wall.jfif",
];
var textureToShow = 0;

const woodArr = [
  "images2/hutroof.jpg",
  "images2/roof.jfif",
  "images2/roof2.jpg",
  "images2/roof1.jpg",
];

var loader = new THREE.TextureLoader();
//allow cross origin loading
loader.crossOrigin = "";

let woodTex = 0;
// // Click interaction for body handle.........
var canvas = document.getElementsByTagName("canvas")[0];

canvas.addEventListener("click", function () {
  loader.load(arr[textureToShow], function (tex) {
    // Once the texture has loaded
    // Asign it to the material

    anotherpilerbodyM.map = tex;
    // Update the next texture to show
    textureToShow++;
    // Have we got to the end of the textures array
    if (textureToShow > arr.length - 1) {
      textureToShow = 0;
    }
  });
});

//click interaction for cottage body............
var canvas = document.getElementsByTagName("canvas")[0];

canvas.addEventListener("click", function () {
  loader.load(woodArr[woodTex], function (tex) {
    // Once the texture has loaded
    // Asign it to the material
    anotherpilerheadM.map = tex;
    pilerheadM.map = tex;
    // Update the next texture to show
    woodTex++;
    // Have we got to the end of the textures array
    if (woodTex > woodArr.length - 1) {
      woodTex = 0;
    }
  });
});

// movement
document.onkeydown = (event) => {
  if (
    event.keyCode != 38 &&
    event.keyCode != 40 &&
    event.keyCode != 37 &&
    event.keyCode != 65 &&
    event.keyCode != 68 &&
    event.keyCode != 39
  )
    return;

  if (event.keyCode == 38) {
    // up
    camera.position.x += 50 * Math.sin(camera.rotation.y) * 0.2;
    camera.position.z += -50 * Math.cos(camera.rotation.y) * 0.2;
  } else if (event.keyCode == 40) {
    // down
    camera.position.x -= 50 * Math.sin(camera.rotation.y) * 0.2;
    camera.position.z -= -50 * Math.cos(camera.rotation.y) * 0.2;
  } else if (event.keyCode == 37) {
    camera.rotation.y += Math.PI * 0.02;
  } else if (event.keyCode == 39) {
    camera.rotation.y -= Math.PI * 0.02;
  } else if (event.keyCode == 68) {
    // key A
    camera.position.x += 30 * Math.sin(camera.rotation.y + Math.PI / 2) * 0.2;
    camera.position.z += -30 * Math.cos(camera.rotation.y + Math.PI / 2) * 0.2;
  } else if (event.keyCode == 65) {
    // key D
    camera.position.x += 30 * Math.sin(camera.rotation.y - Math.PI / 2) * 0.2;
    camera.position.z += -30 * Math.cos(camera.rotation.y - Math.PI / 2) * 0.2;
  }
};

// light.position.x = -4.179448310183141;
// light.position.z = 27.25417227513185;
ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

light = new THREE.PointLight(0xffffff, 0.8, 18);
light.position.set(-3, 6, -3);
light.castShadow = true;
// Will not light anything closer than 0.1 units or further than 25 units
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 25;
scene.add(light);

const sphere = new THREE.SphereGeometry(0.2, 16, 8);

light1 = new THREE.PointLight(0xff0040, 4, 100);
light1.position.set(-10, 10, 0);
light1.add(
  new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 }))
);
scene.add(light1);

light2 = new THREE.PointLight(0x0040ff, 4, 300);
light2.position.set(-8, 3, 7);
light2.add(
  new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x0040ff }))
);
scene.add(light2);

light3 = new THREE.PointLight(0x80ff80, 4, 100);
light3.position.set(-10, 5, 0);
light3.add(
  new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0x80ff80 }))
);
scene.add(light3);

light4 = new THREE.PointLight(0xffaa00, 4, 100);
light4.add(
  new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xffaa00 }))
);
scene.add(light4);

function animate() {
  requestAnimationFrame(animate);
  //   anotherpiler.rotation.y += 0.05;
  // build.rotation.y -= 0.01;

  const time = Date.now() * 0.0005;
  light1.position.x = Math.sin(time * 0.7) * 100;
  light1.position.y = Math.cos(time * 0.5) * 100;
  light1.position.z = Math.cos(time * 0.3) * 100;

  light2.position.x = Math.cos(time * 0.3) * 100;
  light2.position.y = Math.sin(time * 0.5) * 100;
  light2.position.z = Math.sin(time * 0.7) * 100;

  light3.position.x = Math.sin(time * 0.7) * 100;
  light3.position.y = Math.cos(time * 0.3) * 100;
  light3.position.z = Math.sin(time * 0.5) * 100;

  light4.position.x = Math.sin(time * 0.3) * 100;
  light4.position.y = Math.cos(time * 0.7) * 100;
  light4.position.z = Math.sin(time * 0.5) * 100;

  //controls.update();
  renderer.render(scene, camera);
}

animate();
