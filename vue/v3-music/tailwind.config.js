/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 让src开发目录下的所以下面这些后缀的文件支持tailwindcss  **以下所有文件
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

