export default function renderUsers(users) {
  const userRows = users
    .map(user => {
      return `
      <div class="flex items-center py-4 rounded-md bg-white divide-x-2 divide-slate-500">
        <div>
          <form data-id="${user.id}" data-type="name" class="flex items-center gap-2 px-8">
            <input type="text" name="name" value="${
              user.name
            }" class="w-32 px-2 py-2 border border-slate-400 rounded-md" />
            <button type="submit" class="p-2 bg-sky-500 text-white rounded-md">변경</button>
          </form>
        </div>
        <div>
          <form data-id="${user.id}" data-type="point" class="flex items-center gap-2 px-8">
            <input type="number" name="point" min="0" max="100" value="${
              user.point.value
            }" class="px-2 py-2 text-right border border-slate-400 rounded-md" />
            <input type="hidden" name="point-id" value="${user.point.id}" />
            <span>포인트</span>
            <button type="submit" class="p-2 bg-sky-500 text-white rounded-md">변경</button>
            <button type="reset" class="p-2 bg-slate-500 text-white rounded-md">초기화</button>
          </form>
        </div>
        <div>
          <form data-id="${user.id}" data-type="activated" class="flex items-center gap-2 px-8">
            <div>
              <label for="${user.id}-activated" class="text-sky-600">활성화</label>
              <input type="radio" name="activated" id="${user.id}-activated" ${
        user.activated ? 'checked' : ''
      } value="true" />
            </div>
            <div>
              <label for="${user.id}-unactivated" class="text-red-700">비활성화</label>
              <input type="radio" name="activated" id="${user.id}-unactivated" ${
        !user.activated ? 'checked' : ''
      } value="false" />
            </div>
            <button type="submit" class="p-2 bg-sky-500 text-white rounded-md">변경</button>
          </form>
        </div>
      </div>
    `
    })
    .join('')

  return `<div class="flex flex-col gap-4 p-4 mx-auto my-16 w-fit rounded-lg bg-gray-200">
    ${userRows}
  </div>`
}
