//1.Selecting all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

//2. Adding elements on clicking "Submit"
form.addEventListener('submit', (e) => {
  e.preventDefault()

  //1. Create an item
  const item = document.createElement('div')
  item.innerText = input.value
  item.classList.add('list-item')
  console.log(item)

  //2. Add item to the list
  list.appendChild(item)

  //3. Delete the text space
  input.value = ''

  //4. Setup an Eventlistener to delete item when clicked
  item.addEventListener('click', (e) => {
    // list.removeChild(item) or
    item.remove()
  })
})
