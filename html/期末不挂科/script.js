function login() {
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;

    if (studentId && studentName) {
        // 隐藏登录表单，显示学科选择
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('subject-selection').classList.remove('hidden');
    } else {
        alert('请输入学号和姓名');
    }
}

function startExam() {
    // 隐藏学科选择，显示进度条
    document.getElementById('subject-selection').classList.add('hidden');
    document.getElementById('progress-bar').classList.remove('hidden');

    // 模拟进度加载
    let progress = 0;
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');

    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `加载中... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            progressText.innerText = '该门科目的知识已输入你的脑子！';
        }
    }, 500);
}
