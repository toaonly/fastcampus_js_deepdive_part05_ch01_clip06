const api = {
  getUsers() {
    return fetch('http://localhost:3000/users')
      .then(async res => await res.json())
      .then(async users => {
        for (let i = 0; i < users.length; i++) {
          const user = users[i]

          user.point = await api.getPoint(user.point)
        }

        return users
      })
  },

  updateUser(id, updatedUser) {
    return fetch(`http://localhost:3000/users/${id}`, { method: 'PATCH', body: JSON.stringify(updatedUser) }).then(
      async res => await res.json()
    )
  },

  getPoint(id) {
    return fetch(`http://localhost:3000/points/${id}`).then(async res => await res.json())
  },

  updatePoint(id, updatedPoint) {
    return fetch(`http://localhost:3000/points/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ value: updatedPoint }),
    }).then(async res => await res.json())
  },
}

export default api
