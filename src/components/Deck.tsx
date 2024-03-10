import { Slot, component$, useVisibleTask$ } from "@builder.io/qwik"
import Reveal from "reveal.js"

export const Deck = component$(() => {
  useVisibleTask$(() => {
    const deck = new Reveal({
      controls: true,
      progress: true,
      center: true,
      slideNumber: false,
      hash: true,
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
