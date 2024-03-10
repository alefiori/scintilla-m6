import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik"
import Reveal from "reveal.js"

export const Deck = component$(() => {
  useVisibleTask$(() => {
    const deck = new Reveal({
      slideNumber: true,
      controls: true,
      progress: true,
    })
    deck.initialize()
  })

  return (
    <div class="reveal">
      <div class="slides">
        <Slot />
      </div>
    </div>
  )
})
