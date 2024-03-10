import { Slot, component$ } from "@builder.io/qwik"
import { Slide } from "."

type Props = {
  title?: string
}

export const GenericSlide = component$<Props>(({ title }) => {
  return (
    <Slide>
      <h2>{title}</h2>
      <Slot />
    </Slide>
  )
})
