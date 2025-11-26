import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "SpaceMonoLocal",
        cssVariable: "--font-inter",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/SpaceMono-Regular.woff2"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/SpaceMono-Bold.woff2"]
          }
        ]
      },
      {
        provider: "local",
        name: "NeonSans",
        cssVariable: "--font-neon",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/NeonSans.woff2"]
          }
        ]
      }
    ]
  }
})