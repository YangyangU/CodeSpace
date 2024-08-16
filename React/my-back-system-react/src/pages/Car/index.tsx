// ThreeScene.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Car: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current!.clientWidth / mountRef.current!.clientHeight,
            0.1,
            1000,
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(
            mountRef.current!.clientWidth,
            mountRef.current!.clientHeight,
        );

        // 将渲染器的 DOM 元素添加到 React 组件的 DOM 元素中
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }
        // 相机位置
        camera.position.set(2, 2, 3);

        // Load the GLTF model
        const loader = new GLTFLoader();
        loader.load(
            '../../public/su7/scene.gltf',
            function (gltf) {
                scene.add(gltf.scene);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% 已加载');
            },
            function (error) {
                console.log(error);
            },
        );

        // 添加 OrbitControls 控件
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true; // 启用阻尼效果
        // controls.dampingFactor = 0.25; // 阻尼系数
        // controls.screenSpacePanning = false; // 禁用平移
        // controls.minDistance = 2; // 设置最小缩放距离
        // controls.maxDistance = 10; // 设置最大缩放距离
        // controls.maxPolarAngle = Math.PI / 2; // 限制垂直旋转范围

        // 创建一个简单的赛道
        const trackGeometry = new THREE.PlaneGeometry(100, 100);
        const trackMaterial = new THREE.MeshStandardMaterial({
            color: 0x333333,
        });
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
            controls.update(); // 更新控件
            renderer.render(scene, camera);
        }
        animate();
        // 处理窗口大小调整
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // 在组件卸载时清理资源
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            controls.dispose();
            renderer.dispose();
        };
    }, []);
    return <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default Car;
