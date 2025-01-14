import * as THREE from "three";

const scene = new THREE.Scene();

// PerspectiveCamera(fov: number, aspect: number, near: number, far: number)
/**
 * fov: 視野角 カメラが写す角度
 * aspect: アスペクト比 カメラの縦横比
 * near: カメラからの最小距離(開始距離)
 * far: カメラからの最大距離 (終了距離)
 */
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight, // 画面全体のアスペクト比
  0.1,
  1000
);

// WebGLRenderer: WebGLを使ったレンダリングを行うクラス
/**
 *
 */
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
