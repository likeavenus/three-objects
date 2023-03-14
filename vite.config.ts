import { defineConfig } from "vite";

export default defineConfig({
    assetsInclude: ['**/*.gltf', '**/*.3DS', '**/*.mp3', '**/*.png', '**/*.bin'],
    base: '/three-objects/',
    server: {
        watch: {
            usePolling: true,
        }
    },
})