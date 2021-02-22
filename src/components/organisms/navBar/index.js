import React from 'react'
import {Button} from '../../atoms'
import {Container} from './styled'

import { useHistory } from 'react-router-dom'
import auth from '../../../auth'

const NavBar = () => {
  const history = useHistory()

  const logout = () => {
    auth.logout(() => {
      history.push('/')
    })
  }

  return <Container>
    <Button onClick={logout}>Logout</Button>
  </Container>
  
}

export default NavBar