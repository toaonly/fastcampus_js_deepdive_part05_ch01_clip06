import api from './api'

const service = {
  getUsers() {
    return api.getUsers()
  },
  updateUser(id, updatedUser) {
    return api.updateUser(id, updatedUser)
  },
  clearPoint(id) {
    return service.updatePoint(id, 0)
  },
  updatePoint(id, point) {
    return api.updatePoint(id, point)
  },
}

export default service
