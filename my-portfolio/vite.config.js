import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "./src/styles/variables.less";`
      }
    }
  }
});
