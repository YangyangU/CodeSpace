export default function addWatermark(dom,container, data) {
    if (!dom) return;

    // 创建 MutationObserver 实例
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                // 如果有子元素被添加或删除，重新添加水印
                addWatermark1(dom, data);
            }
        });
    });

    // 配置 MutationObserver
    const config = { childList: true, subtree: true ,attributes: true,};

    // 将 MutationObserver 附加到 imageContainer 上
    observer.observe(container, config);

    function addWatermark1(dom, data) {

        dom.forEach((imgRef, index) => {
            const img = new Image();
            img.src = data[index].head_img;
    
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
    
                canvas.width = img.width;
                canvas.height = img.height;
    
                ctx.drawImage(img, 0, 0);
    
                ctx.font = '200px Arial';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('版权所有', canvas.width / 2, canvas.height / 2);
    
                // 将 Canvas 中的图像输出到 img 元素
                imgRef.src = canvas.toDataURL();
            };
        });
    }
    addWatermark1(dom, data)

    dom.forEach(imgRef => {
        imgRef.addEventListener('load', () => {
            addWatermark1(dom, data);
        });
    });
}

