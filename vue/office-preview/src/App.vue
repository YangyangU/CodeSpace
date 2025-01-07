<template>
    <div style="display: flex;flex-direction: column; align-items: center;margin-top: 50px;">
        <input type="file" ref="input"/>
        <button @click="uploadFile">上传文件</button>
        <div style="width: 100%; height: 500px;display: flex;flex-direction: column;align-items: center;background-color: #eee;">
            <Docx v-if="suffix === 'docx'"/>
            <Excel v-else-if="suffix === 'excel'"/>
            <Pdf v-else-if="suffix === 'pdf'"/>
            <Ppt v-else-if="suffix === 'ppt'"/>
            <div v-else>😂</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import Excel from './components/Excel.vue';
import Docx from './components/Docx.vue';
import Pdf from './components/Pdf.vue';
import Ppt from './components/Ppt.vue';
const suffix = ref('')
const input = ref<HTMLInputElement | null>(null)

const uploadFile = async () => {
    const file = input.value?.files?.[0];
    if (!file) {
        alert("请先选择一个文件！");
        return;
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (fileExtension) {
        suffix.value = fileExtension;
    } else {
        suffix.value = '';
    }
    const formData = new FormData();
    formData.append("file", file);

    try{
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });
        console.log(response);

        if (response.ok) {
            alert("上传成功！")
        } else {
            alert("上传失败！")
        }
    } catch (error) {
        alert("上传失败！")
        console.error("上传出错", error);
    }
};
</script>

<style scoped>

</style>