import { qwikVite } from "@builder.io/qwik/optimizer"
import { defineConfig, splitVendorChunkPlugin } from "vite"

export default defineConfig({
  plugins: [
    qwikVite({
      csr: true,
    }),
    splitVendorChunkPlugin(),
  ],
})
