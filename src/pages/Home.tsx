import { component$ } from "@builder.io/qwik"
import { menuElements, navigateTo } from "../utils"

export const Home = component$(() => {
  return (
    <main>
      <h1>Sviluppo di applicazioni web e mobile</h1>
      <h2>Progetto Scintilla - UNICAM</h2>
      <div class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {menuElements.map((route, index) => (
          <button
            key={index}
            aria-current="true"
            type="button"
            class="w-full px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none"
            onClick$={() => navigateTo(route)}
          >
            Lezione {route}
          </button>
        ))}
      </div>
    </main>
  )
})
