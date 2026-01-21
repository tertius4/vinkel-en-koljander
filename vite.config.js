import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "firebase-app": ["./src/lib/chunk/firebase-app.ts"],
          "firebase-firestore": ["./src/lib/chunk/firebase-firestore.ts"],
        },
      },
    },
  },
});
