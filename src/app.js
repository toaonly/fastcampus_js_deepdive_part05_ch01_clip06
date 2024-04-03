import renderUsers from './renderUsers'
import service from './service'

async function refresh() {
  const app = document.querySelector('#app')

  app.innerHTML = '<div class="mx-auto my-16 w-fit text-xl">Loading...</div>'
  app.innerHTML = renderUsers(await service.getUsers())
}

export default async function renderApp() {
  await refresh()

  window.addEventListener('submit', async e => {
    e.preventDefault()

    const form = e.target
    const formElements = form.elements
    const id = form.dataset.id
    const type = form.dataset.type

    if (type === 'name') {
      const name = formElements.namedItem('name').value
      
      await service.updateUser(id, { name })
    } else if (type === 'point') {
      const point = +formElements.namedItem('point').value

      await service.updatePoint(id, point)
    } else if (type === 'activated') {
      const activated = JSON.parse(formElements.namedItem('activated').value)

      await service.updateUser(id, { activated })
    }

    refresh()
  })

  window.addEventListener('reset', async e => {
    e.preventDefault()

    const form = e.target
    const id = form.dataset.id
    const type = form.dataset.type

    if (type === 'point') {
      await service.clearPoint(id)
    }

    refresh()
  })
}
