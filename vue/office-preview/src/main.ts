import { createApp } from 'vue'
import App from './App.vue'
import FileViewer from '@flyfish-group/file-viewer3'

import '@flyfish-group/file-viewer3/dist/style.css'

createApp(App).use(FileViewer).mount('#app')