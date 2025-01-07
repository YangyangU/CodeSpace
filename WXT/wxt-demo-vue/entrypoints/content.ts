import { createApp } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineContentScript({
  matches: ["<all_urls>"],
  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: "#juejin",
      onMount: (container) => {
        const app = createApp(HelloWorld);
        app.mount(container);
        return app;
      },
      onRemove: (app) => {
        if (app) {
          app.unmount();
        }
      },
    });
    ui.mount();
  },
});
