import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik"
import Reveal from "reveal.js"
import RevealHighlight from "reveal.js/plugin/highlight/highlight"
import RevealNotes from "reveal.js/plugin/notes/notes"
import { Footer } from "."

export const Deck = component$(() => {
  useVisibleTask$(() => {
    const deck = new Reveal({
      controls: true,
      progress: true,
      slideNumber: false,
      hash: true,
      center: false,
    })
    deck.initialize({
      plugins: [RevealHighlight, RevealNotes],
    })
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
