// import React, { Component } from "react";
// import * as THREE from "three";

// class Profile3D extends Component {
//   componentDidMount() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       50,
//       window.innerWidth / window.innerHeight,
//       // 1 / 1,
//       0.1,
//       1000
//     );

//     var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

//     renderer.shadowMap.enabled = true;

//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     renderer.outputEncoding = THREE.sRGBEncoding;

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     this.mount.appendChild(renderer.domElement);



//     // var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var geometry = new THREE.CylinderGeometry(1, 1, 0.1, 64);
//     var material = new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true });
//     var cylinder = new THREE.Mesh(geometry, material);
//     cylinder.receiveShadow = true;
//     cylinder.rotation.set(THREE.Math.degToRad(90), 0, 0)
//     scene.add(cylinder);
//     scene.background = null;


//     // const ambient = new THREE.AmbientLight(0xffffff, 0.1);
//     // scene.add(ambient);

//     var spotLight = new THREE.SpotLight(0xffffff, 1);
//     spotLight.position.set(15, 40, 35);
//     spotLight.angle = Math.PI / 4;
//     spotLight.penumbra = 0.1;
//     spotLight.decay = 2;
//     spotLight.distance = 200;

//     spotLight.castShadow = true;
//     spotLight.shadow.mapSize.width = 512;
//     spotLight.shadow.mapSize.height = 512;
//     spotLight.shadow.camera.near = 10;
//     spotLight.shadow.camera.far = 200;
//     spotLight.shadow.focus = 1;
//     scene.add(spotLight);


//     camera.position.z = 3;



//     let mouse = new THREE.Vector2()
//     document.addEventListener('mousemove', onDocumentMouseMove, false);
//     document.addEventListener('mousedown', onMouseDown, false);
//     window.addEventListener('resize', onWindowResize, false);
    


//     function onDocumentMouseMove(event) {
//       event.preventDefault();
//       mouse.x = ((event.clientX / window.innerWidth) * 2 - 1) * 50;
//       mouse.y = (-(event.clientY / window.innerHeight) * 2 + 1) * 50;
//     }

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }


//     function onMouseDown(event) {
//       console.log("mouse position: (" + mouse.x + ", " + mouse.y + ")");
//     }




//     var animate = function () {
//       requestAnimationFrame(animate);

//       console.log(cylinder.rotation)
//       // cube.rotation.x = -mouse.y;
//       cylinder.rotation.z = THREE.Math.degToRad(-mouse.x);
      

//       renderer.render(scene, camera);
//     };

//     animate();
//   }
//   render() {
//     return <div ref={ref => (this.mount = ref)} />;
//   }
// }

// export default Profile3D