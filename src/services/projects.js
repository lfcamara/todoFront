import server from './server'

class ProjectService {
  
  async get() {
    console.log('GET PROJECTS');
    try {
      const res =  await server.get('/projects')
      console.log(res.data.result);
      return res.data.result
    } catch(e) {
        return e
    }
  }

  async post(body) {
    try {
      const res =  await server.post('/projects', body)
      console.log(res);
    } catch(e) {
        return e
    }
  }

  async put(body) {
    try {
      return await server.put('/projects', body)
    } catch(e) {
        return e
    }
  }

  async delete(id) {
    try {
      const res =  await server.delete(`/projects/${id}`)
      console.log(res);
      return res
    } catch(e) {
        return e
    }
  }
}

export default new ProjectService()