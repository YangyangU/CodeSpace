import { useEffect, useRef } from "react";
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  LitMaterial,
  BoxGeometry,
  MeshRenderer,
  DirectLight,
  HoverCameraController,
} from "@orillusion/core";

const Car = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const init = async (canvas: any) => {
    if (!canvas.current) return; // 如果 canvas 不存在，直接返回
    await Engine3D.init({
      canvasConfig: { canvas: canvas.current },
    });
    const scene3D = new Scene3D();
    // 添加大气散射天空组件
    // 新建摄像机实例
    const cameraObj = new Object3D();
    const camera = cameraObj.addComponent(Camera3D);
    // 根据窗口大小设置摄像机视角
    camera.perspective(60, window.innerWidth / window.innerHeight, 1, 5000.0);
    // 设置相机控制器
    const controller = camera.object3D.addComponent(HoverCameraController);
    controller.setCamera(0, 0, 15);
    // 添加相机节点
    scene3D.addChild(cameraObj);
    // 新建光照
    const light = new Object3D();
    // 添加直接光组件
    const component = light.addComponent(DirectLight);
    // 调整光照参数
    light.rotationX = 45;
    light.rotationY = 30;
    component.intensity = 2;
    // 添加光照对象
    scene3D.addChild(light);
    // 新建对象
    const obj = new Object3D();
    // 为对象添 MeshRenderer
    const mr = obj.addComponent(MeshRenderer);
    // 设置几何体
    mr.geometry = new BoxGeometry(5, 5, 5);
    // 设置材质
    mr.material = new LitMaterial();
    scene3D.addChild(obj);
    // 创建View3D对象
    const view = new View3D();
    // 指定渲染的场景
    view.scene = scene3D;
    // 指定使用的相机
    view.camera = camera;
    // 开始渲染
    Engine3D.startRenderView(view);
  };
  useEffect(() => {
    console.log(ref.current); 
    setTimeout(()=>{
        init(ref);
    },100);
  }, []);

  return (
    <canvas ref={ref} style={{ width: '800px', height: '500px' }} />
  );
};

export default Car;
