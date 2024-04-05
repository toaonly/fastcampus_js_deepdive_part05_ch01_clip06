import renderUsers from './renderUsers'
import service from './service'
import setFormEventData from './setFormEventData'

async function refresh() {
  const app = document.querySelector('#app')

  app.innerHTML = '<div class="mx-auto my-16 w-fit text-xl">Loading...</div>'
  app.innerHTML = renderUsers(await service.getUsers())
}

export default async function renderApp() {
  await refresh()

  const eventsByEventName = {
    submit: {
      name: setFormEventData({
        items: ['name'],
        on: ({ id, name }) => service.updateUser(id, { name }),
      }),
      point: setFormEventData({
        items: ['point-id', 'point'],
        on: ({ pointId, point }) => service.updatePoint(pointId, +point),
      }),
      activated: setFormEventData({
        items: ['activated'],
        on: ({ id, activated }) => service.updateUser(id, { activated: JSON.parse(activated) }),
      }),
    },
    reset: {
      point: setFormEventData({
        items: ['point-id'],
        on: ({ pointId }) => service.clearPoint(pointId),
      }),
    },
  }
  const events = Object.keys(eventsByEventName)

  events.forEach(event => {
    window.addEventListener(event, async e => {
      e.preventDefault()

      const form = e.target
      const type = form.dataset.type
      const formEventDatas = eventsByEventName[event][type]

      await formEventDatas.emit(form)

      refresh()
    })
  })
}
