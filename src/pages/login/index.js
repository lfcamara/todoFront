import React, { useState } from 'react'
import {Title, Input, Button} from '../../components/atoms'
import {Container, Footer} from './styled'

import { useHistory } from 'react-router-dom'
import auth from '../../auth'


const Login = () => {
  const [userName, setUserName] = useState('')
  const [passwd, setPasswd] = useState('')
  const history = useHistory()
  const user = {
    username: userName,
    password: passwd
  }

  const setUser= (event) => {
    setUserName(event.target.value)
  }

  const setPassword = (event) => {
    setPasswd(event.target.value)
  }

  const login = () => {
    auth.login(user,() => {
      history.push('/dashboard')
    })
  }

  const createUser = () => {
    auth.register(user,() => {
      history.push('/dashboard')
    })
  }

  return <Container>
    <Title>Login</Title>
    <Input 
      placeholder='User' 
      value={ userName }
      onChange={ setUser }/>
    <Input 
      placeholder='Password'
      value={ passwd }
      onChange={ setPassword }/>
    <Button onClick={login}>Login</Button>
    <Footer>
      <Button onClick={createUser}>Create Account</Button>
    </Footer>
  </Container>
}

export default Login