<template>
  <div>
    <div class="header">

    </div>
    <div class="home">
      <div class="content-box">
        <div class="container" ref="containerRef">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as THREE from "three"
import {ref,onMounted} from "vue"
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
//canvas 3D HTML 的绘图标签  领域：数据可视化，游戏

const containerRef = ref(null)//挂载canvas

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,//横着拿
  0.1,
  1000
)

let controls = null

camera.position.set(0,2,6)//摆好摄像头
//场景
const scene = new THREE.Scene()
//渲染器 canvas 幕布 不停的去输出
const renderer = new THREE.WebGL1Renderer({
  antialias: true,
})
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)

const render = ()=>{
  renderer.render(scene,camera)
  requestAnimationFrame(render)//性能优化
}
onMounted(()=>{

  containerRef.value.appendChild(renderer.domElement)
  renderer.setClearColor('#000')
  scene.background = new THREE.Color('#fff')
  scene.environment = new THREE.Color('#fff')
  render()

  controls = new OrbitControls(camera,renderer.domElement)
  controls.update()

  //坐标辅助线
  const gridHelper = new THREE.GridHelper(10,10)
  gridHelper.material.opacity = 0.2
  gridHelper.material.transparent = true
  scene.add(gridHelper)
  

  //加载汽车模型
  const loader = new GLTFLoader() //3DMax gltf格式
  const dracoLoader = new DRACOLoader() //解码器
  dracoLoader.setDecoderPath('../public/roadSter/draco/gltf/')
  loader.setDRACOLoader(dracoLoader)
  loader.load('../public/roadSter/model/bmw01.glb',gltf=>{
    const bmw = gltf.scene
    scene.add(bmw)
    bmw.traverse(child =>{
      if(child.isMesh && child.name.includes('轮毂')){
        child.material = wheelsMaterial
        wheels.push(child)
      }
    })
  })

  const light1 = new THREE.DirectionalLight(0xffffff,1)
  light1.position.set(0,0,10)
  scene.add(light1)
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);
  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);
  const light6 = new THREE.DirectionalLight(0xffffff, 1);
  light6.position.set(5, 10, 0);
  scene.add(light6);
  const light7 = new THREE.DirectionalLight(0xffffff, 1);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new THREE.DirectionalLight(0xffffff, 1);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new THREE.DirectionalLight(0xffffff, 1);
  light9.position.set(-5, 10, 0);
  scene.add(light9);
})

let wheels = []
const wheelsMaterial = new THREE.MeshBasicMaterial({
  color:0x424449,
  metalness:1,
  roughness:0.5,
})
</script>

<style lang="scss" scoped>

</style>