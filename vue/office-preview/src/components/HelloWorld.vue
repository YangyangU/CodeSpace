<template>
  <div>
    <button @click="previewPPT">预览 PPT</button>
    <!-- PPTXjs 渲染的内容会插入到这个 div 中 -->
    <div ref="pptContainer" style="width: 100%; height: 500px;"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import PPTX from 'pptxjs';
import JSZip from 'jszip';

export default {
  setup() {
    const pptContainer = ref(null); // 用于存放 PPTXjs 渲染内容的容器

    const pptBase64 = 'your_base64_encoded_data_here'; // 替换为你的 Base64 数据

    const previewPPT = async () => {
      // 初始化 PPTXjs
      PPTX.PPTXjs = PPTX;
      PPTX.JSZip = JSZip;
      
      // 将 Base64 数据转换为 Blob
      const byteCharacters = atob(pptBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
      
      // 使用 PPTXjs 加载并显示 PPT
      const fileReader = new FileReader();
      fileReader.onload = function (event) {
        const arrayBuffer = event.target.result;
        PPTX.render(pptContainer.value, arrayBuffer);
      };
      fileReader.readAsArrayBuffer(blob);
    };

    return {
      pptContainer,
      previewPPT,
    };
  },
};
</script>
