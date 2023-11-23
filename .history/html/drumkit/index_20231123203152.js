function playSound(e) {
    // console.log(e.keyCode);
    const keyCode = e.keyCode;
    // 标签的数据属性
    const key = document.querySelector(
        `.key[data-key="${keyCode}"]`
    );
    
    key && key.classList.add('playing');

    const audio = document.querySelector(
        `audio[data-key="${keyCode}"]`
    )
    if (audio) {
        audio.currentTime = 0
        audio.play()
    }
    // audio && audio.currentTime = 0
    // audio && audio.play()
    // setTimeout(() => {
    //     key.classList.remove('playing');
    // }, 100)
}
const keys = Array.from(document.querySelectorAll('.key'))
console.log(keys);
keys.forEach(key => {
    // 事件一定要一个个元素的加
    key.addEventListener('transitionend', function(e) {
        // console.log(e);
        // console.log(e.propertyName);
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    })
})
window.addEventListener('keydown', playSound)
