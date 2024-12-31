1. 安装 python (>3)
2. 安装 Jupyter Notebook
```bash
pip install notebook
```
3. 安装 deno （windows PowerShell）
```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
4. 使用 deno 为 Jupyter Notebook 配置 kernel
```bash
deno jupyter --unstable --install
```
5. 验证 kernel
```bash
deno jupyter --unstable
```
6. 启动 notebook
```bash
jupyter notebook
```