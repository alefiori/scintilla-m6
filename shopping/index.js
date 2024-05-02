const textInput = document.getElementById("text-input")
const addButton = document.getElementById("add-button")
const list = document.getElementById("list")
const filter = document.getElementById("filter")
const filterModal = document.getElementById("filter-modal")
const filterModalClose = document.getElementById("filter-modal-close")
const filterSelect = document.getElementById("filter-select")
const emptyList = document.getElementById("empty-list")
const removeModal = document.getElementById("remove-modal")
const removeModalClose = document.getElementById("remove-modal-close")
const removeModalButton = document.getElementById("remove-modal-button")
const removeModalElement = document.getElementById("remove-modal-element")

const addItemToSessionStorage = (text) => {
  const items = JSON.parse(sessionStorage.getItem("items")) || []
  if (items.find((i) => i.text === text)) {
    alert("Item already exists")
    textInput.value = ""
  } else {
    items.push({
      text,
      done: false,
    })
    sessionStorage.setItem("items", JSON.stringify(items))
    textInput.value = ""
  }
}

const removeItemFromSessionStorage = (text) => {
  const items = JSON.parse(sessionStorage.getItem("items")) || []
  const newItems = items.filter(
    (i) => i.text.toLowerCase().trim() !== text.toLowerCase().trim()
  )
  sessionStorage.setItem("items", JSON.stringify(newItems))
}

const changeItemStatusInSessionStorage = (item) => {
  const items = JSON.parse(sessionStorage.getItem("items")) || []
  const newItems = items.map((i) => {
    if (i.text === item.text) {
      i.done = !i.done
    }
    return i
  })
  sessionStorage.setItem("items", JSON.stringify(newItems))
}

function filterList() {
  const value = filterSelect.value
  for (let i = 0; i < list.children.length; i++) {
    const li = list.children[i]
    if (value === "all") {
      li.style.display = "block"
    } else if (value === "done") {
      li.style.display = li.classList.contains("done") ? "block" : "none"
    } else if (value === "not-done") {
      li.style.display = li.classList.contains("done") ? "none" : "block"
    }
  }
}

const loadItemsFromSessionStorage = () => {
  const items = JSON.parse(sessionStorage.getItem("items")) || []
  list.innerHTML = ""
  if (items.length) {
    emptyList.classList.add("hidden")
  } else {
    emptyList.classList.remove("hidden")
  }
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    if (item.done) {
      li.classList.add("done")
      checkbox.checked = true
    }
    const trashButton = document.createElement("div")
    trashButton.title = "Remove"
    trashButton.classList.add("trash-button")
    trashButton.addEventListener("click", function (event) {
      event.stopPropagation()
      removeModalElement.innerText = item.text
      removeModal.classList.add("active")
    })
    li.appendChild(trashButton)
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(item.text))
    li.addEventListener("click", function () {
      changeItemStatusInSessionStorage(item)
      li.classList.toggle("done")
      filterList()
      checkbox.checked = !checkbox.checked
    })
    checkbox.addEventListener("click", function (event) {
      changeItemStatusInSessionStorage(item)
      event.stopPropagation()
      li.classList.toggle("done")
      filterList()
    })
    list.appendChild(li)
    filterList()
  }
}

function addElement() {
  const text = textInput.value
  if (!text) {
    alert("Please enter a value")
    return
  }
  addItemToSessionStorage(text)
  loadItemsFromSessionStorage()
}

addButton.addEventListener("click", addElement)

textInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addElement()
  }
})

filter.addEventListener("click", function () {
  filterModal.classList.toggle("active")
})

function toggleFilterModal(event) {
  if (event.target === event.currentTarget) {
    filterModal.classList.remove("active")
  }
}

filterModalClose.addEventListener("click", toggleFilterModal)
filterModal.addEventListener("click", toggleFilterModal)

filterSelect.addEventListener("change", filterList)

function closeRemoveModal() {
  removeModal.classList.remove("active")
  removeModalElement.innerText = ""
}

function toggleRemoveModal(event) {
  if (event.target === event.currentTarget) {
    closeRemoveModal()
  }
}

removeModalClose.addEventListener("click", toggleRemoveModal)
removeModal.addEventListener("click", toggleRemoveModal)

removeModalButton.addEventListener("click", function () {
  const text = removeModalElement.innerText
  removeItemFromSessionStorage(text)
  loadItemsFromSessionStorage()
  closeRemoveModal()
})

loadItemsFromSessionStorage()
