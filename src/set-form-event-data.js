import { camelCase } from 'lodash-es'

export default function setFormEventData({ items, on }) {
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
  const emit = form => on(getItemsValue(form))

  return { emit }
}
