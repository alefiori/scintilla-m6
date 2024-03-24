import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik"
import Reveal from "reveal.js"
import { Footer } from "."
import { revealConfig } from "../constants"
import { checkUrlParam } from "../utils"

export const Deck = component$(() => {
  useVisibleTask$(() => {
    new Reveal(revealConfig).initialize()
    if (checkUrlParam("print-pdf")) {
      for (const el of document.querySelectorAll(".fragment")) {
        el.classList.remove("fragment")
      }
      setTimeout(window.print, 300)
    }
  })

  return (
    <main class="h-screen">
      <div class="reveal">
        <div class="slides">
          <Slot />
        </div>
        <Footer />
      </div>
    </main>
  )
})
