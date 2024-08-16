// ThreeScene.tsx
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Car: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 相机位置
    camera.position.z = 3;
    camera.position.y = 2;
    camera.position.x = 2;

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      "../../public/su7/scene.gltf",
      function (gltf) {
        scene.add(gltf.scene);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% 已加载");
      },
      function (error) {
        console.log(error);
      }
    );

    // 添加 OrbitControls 控件
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 启用阻尼效果
    controls.dampingFactor = 0.25; // 阻尼系数
    controls.screenSpacePanning = false; // 禁用平移
    controls.minDistance = 2; // 设置最小缩放距离
    controls.maxDistance = 10; // 设置最大缩放距离
    controls.maxPolarAngle = Math.PI / 2; // 限制垂直旋转范围

    // 创建一个简单的赛道
    const trackGeometry = new THREE.PlaneGeometry(100, 100);
    const trackMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const track = new THREE.Mesh(trackGeometry, trackMaterial);
    track.rotation.x = -Math.PI / 2; // 将赛道放平
    scene.add(track);

    // 前方灯光
    const frontLight = new THREE.DirectionalLight(0xffffff, 1);
    frontLight.position.set(0, 1, 10); // 位于相机前方
    scene.add(frontLight);

    // 后方灯光
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 1, -10); // 位于场景后方
    scene.add(backLight);

    // 左侧灯光
    const leftLight = new THREE.DirectionalLight(0xffffff, 1);
    leftLight.position.set(-10, 1, 0); // 位于场景左侧
    scene.add(leftLight);

    // 右侧灯光
    const rightLight = new THREE.DirectionalLight(0xffffff, 1);
    rightLight.position.set(10, 1, 0); // 位于场景右侧
    scene.add(rightLight);

    // 添加顶部大灯
    const topLight = new THREE.DirectionalLight(0xffffff, 0.5); // 强度稍高
    topLight.position.set(0, 10, 0); // 位置在汽车顶部正上方
    topLight.target.position.set(0, 0, 0); // 目标指向汽车中心
    scene.add(topLight);
    scene.add(topLight.target); // 必须将目标添加到场景

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  });
  return <div></div>;
};

export default Car;
