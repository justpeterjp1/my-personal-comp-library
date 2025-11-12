// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// Import your framework plugin (e.g., react, vue, etc.)
import react from '@vitejs/plugin-react'; // Example for React

export default defineConfig({
  plugins: [
    react(), // Or your framework plugin
    tailwindcss(), // <-- This is the key for v4
  ],
  // **CRITICAL for Docker/WSL2:** Set host option for networking
  server: {
    host: true, // This allows access from outside the container
    port: 5173, // Default Vite port, confirm it's mapped in your Dockerfile
    // watch: {
    //   usePolling: true, // Only if HMR/hot-reload still fails (can be slow)
    // }
  }
});