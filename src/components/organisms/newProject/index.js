import React from 'styled-components'
import {Title, Button} from '../../atoms'
import { Input } from 'antd';

import { Container } from './styled'

const NewProject = () => {
  return <Container>
    <Title> Novo Projeto </Title>
    <Input placeholder='Adicionar Task'/>
    <Button>Add</Button>
  </Container>
}

export default NewProject