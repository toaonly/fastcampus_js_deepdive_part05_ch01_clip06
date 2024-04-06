import renderUsers from './renderUsers'
import service from './service'
import setFormAction from './setFormAction'

async function refresh() {
  const app = document.querySelector('#app')

  app.innerHTML = '<div class="mx-auto my-16 w-fit text-xl">Loading...</div>'
  app.innerHTML = renderUsers(await service.getUsers())
}

export default async function renderApp() {
  await refresh()

  const formActionByEventAndType = {
    submit: {
      name: setFormAction({
        items: ['name'],
        on: ({ id, name }) => service.updateUser(id, { name }),
      }),
      point: setFormAction({
        items: ['point-id', 'point'],
        on: ({ pointId, point }) => service.updatePoint(pointId, +point),
      }),
      activated: setFormAction({
        items: ['activated'],
        on: ({ id, activated }) => service.updateUser(id, { activated: JSON.parse(activated) }),
      }),
    },
    reset: {
      point: setFormAction({
        items: ['point-id'],
        on: ({ pointId }) => service.clearPoint(pointId),
      }),
    },
  }
  const events = Object.keys(formActionByEventAndType)

  events.forEach(event => {
    window.addEventListener(event, async e => {
      e.preventDefault()

      const form = e.target
      const type = form.dataset.type
      const formAction = formActionByEventAndType[event][type]

      await formAction(form)

      refresh()
    })
  })
}
