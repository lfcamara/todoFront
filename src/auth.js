import user from './services/user'

class Auth {
    constructor() {
        this.authenticated = false
    }
    
    async login(_user, cb){
        const body = {
            username: _user.username,
            password: _user.password
          }
  
        const res = await user.login(body)
        console.log(res)
        if(res.status === 200) this.authenticated = true
        cb()
    }

    async register(_user, cb){
      const body = {
          username: _user.username,
          password: _user.password
        }

      const res = await user.register(body)
      if(res.status === 200) this.authenticated = true
      cb()
  }

    logout(cb) {
        this.authenticated = false
        user.logout()
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }

}

export default new Auth()