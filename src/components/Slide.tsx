import { Slot, component$ } from "@builder.io/qwik"

export const Slide = component$(() => {
  return (
    <section>
      <Slot />
    </section>
  )
})
