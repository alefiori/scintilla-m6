import { component$ } from "@builder.io/qwik"
import { menuElements, navigateTo } from "../utils"

export const Home = component$(() => {
  return (
    <main class="text-center p-10 bg-white h-screen">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Sviluppo di applicazioni web e mobile
      </h1>
      <h2 class="text-4xl font-extrabold">Progetto Scintilla - UNICAM</h2>
      <div class="w-48 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mx-auto mt-10">
        {menuElements.map((route, index) => (
          <button
            key={index}
            type="button"
            class="w-full px-4 py-2 font-medium text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            onClick$={() => navigateTo(route)}
          >
            Lezione {route}
          </button>
        ))}
      </div>
    </main>
  )
})
