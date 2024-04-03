import { afterEach, expect, expectTypeOf, vi } from 'vitest'
import service from '../service'
import renderApp from '../app'
import db from '../../db/db.json'

describe('app 테스트', () => {
  beforeEach(
    () =>
      new Promise(done => {
        vi.mock('../service.js', () => {
          return {
            default: {
              getUsers: () =>
                Promise.resolve(
                  db.users.map(user => {
                    return {
                      ...user,
                      point: db.points.find(point => user.point === point.id),
                    }
                  })
                ),
              updateUser: () => vi.fn(),
              clearPoint: () => vi.fn(),
              updatePoint: (id) => id
            },
          }
        })

        document.body.innerHTML = `<div id="app"></div>`

        renderApp().then(done)
      })
  )

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('user name 을 변경하는 form 에 있는 변경 버튼을 클릭 했을 때 service.updateUser 가 호출 된다', () => {
    const forms = Array.from(document.body.querySelectorAll('form'))
    const userNameForm = forms.find(f => f.dataset.type === 'name')
    const spyUpdateUser = vi.spyOn(service, 'updateUser')

    userNameForm.querySelector('button[type="submit"]').click()

    expect(spyUpdateUser).toBeCalled()

    spyUpdateUser.mockReset()
  })

  it('user point 를 변경하는 form 에 있는 변경 버튼을 클릭 했을 때 service.updatePoint 가 호출 되고 첫번째 파라미터는 point-id 이다', () => {
    const forms = Array.from(document.body.querySelectorAll('form'))
    const userPointForm = forms.find(f => f.dataset.type === 'point')
    const spyUpdatePoint = vi.spyOn(service, 'updatePoint')

    userPointForm.querySelector('button[type="submit"]').click()

    expect(spyUpdatePoint).toBeCalled()
    expect(spyUpdatePoint.mock.lastCall[0]).toBe(userPointForm.elements.namedItem('point-id').value)

    spyUpdatePoint.mockReset()
  })

  it('user point 를 변경하는 form 에 있는 초기화 버튼을 클릭 했을 때 service.clearPoint 가 호출 되고 첫번째 파라미터는 point-id 이다', () => {
    const forms = Array.from(document.body.querySelectorAll('form'))
    const userPointForm = forms.find(f => f.dataset.type === 'point')
    const spyClearPoint = vi.spyOn(service, 'clearPoint')

    userPointForm.querySelector('button[type="reset"]').click()

    expect(spyClearPoint).toBeCalled()
    expect(spyClearPoint.mock.lastCall[0]).toBe(userPointForm.elements.namedItem('point-id').value)

    spyClearPoint.mockReset()
  })

  it('user activated 를 변경하는 form 에 있는 변경 버튼을 클릭 했을 때 service.updateUser 가 호출 된다', () => {
    const forms = Array.from(document.body.querySelectorAll('form'))
    const userActivatedForm = forms.find(f => f.dataset.type === 'activated')
    const spyUpdateUser = vi.spyOn(service, 'updateUser')

    userActivatedForm.querySelector('button[type="submit"]').click()

    expect(spyUpdateUser).toBeCalled()

    spyUpdateUser.mockReset()
  })
})
