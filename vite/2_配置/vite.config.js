import { defineConfig } from "vite";//需不需要提示
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
    plugins:[
        legacy({
            targets:['ie 11'],
        })
    ]
})