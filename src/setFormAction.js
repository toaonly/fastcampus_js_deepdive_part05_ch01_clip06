import { camelCase } from 'lodash-es'

export default function setFormAction({ items, on }) {
  const getItemsValue = form => {
    return items.reduce(
      (acc, item) => ({
        ...acc,
        [camelCase(item)]: form.elements.namedItem(item).value,
      }),
      {
        id: form.dataset.id,
      }
    )
  }
  const action = form => on(getItemsValue(form))

  return action
}
