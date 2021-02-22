import server from './server'

class UserService {
  async login(body) {
    try {
      return await server.post('/user/login', body)
    } catch(e) {
        return e
    }
  }

  async logout() {
    try { 
      await server.delete('/user/logout')
    } catch(e) {
        return e
    }
  }

  async register(body) {
    try {
      return await server.post('/user/register', body)
    } catch(e) {
        return e
    }
  }
}

export default new UserService()