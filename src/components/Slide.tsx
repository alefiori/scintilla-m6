import {
  $,
  Slot,
  component$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik"
import Reveal from "reveal.js"

export const Slide = component$(() => {
  const deckElSig = useSignal<HTMLElement>()
  const deckSig = useSignal<Reveal.Api>()

  const initialize = $(() => {
    if (deckSig.value) {
      deckSig.value.initialize()
    }
  })

  useVisibleTask$(() => {
    if (deckSig.value || !deckElSig.value) return

    deckSig.value = new Reveal(deckElSig.value, {
      controls: true,
      progress: true,
      center: true,
      hash: true,
      transition: "slide",
    })

    // deckSig.value.initialize()

    initialize()

    // return () => {
    //   try {
    //     if (deckSig.value) {
    //       deckSig.value.destroy()
    //       deckSig.value = undefined
    //     }
    //   } catch (e) {
    //     console.warn("Reveal.js destroy call failed.")
    //   }
    // }
  })

  return (
    <div class="reveal" ref={deckElSig}>
      <Slot />
    </div>
  )
})
