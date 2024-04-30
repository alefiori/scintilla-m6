import { component$ } from "@builder.io/qwik"

export const FeedbacksButton = component$(() => {
  return (
    <a
      target="_blank"
      href="https://forms.gle/RHxHGzDkTt5LXRQJ7"
      class="fixed right-4 bottom-4 p-4 text-gray-950 text-xl bg-highlight rounded-full shadow-lg hover:shadow-xl hover:bg-highlight-dark"
    >
      Inviami un feedback!
    </a>
  )
})
