import { ClassList, Slot, component$ } from "@builder.io/qwik"

type Props = {
  title?: string
  className?: ClassList
}

export const Slide = component$<Props>(({ title, className }) => {
  return (
    <section class={className}>
      <h2>{title}</h2>
      <Slot />
    </section>
  )
})
