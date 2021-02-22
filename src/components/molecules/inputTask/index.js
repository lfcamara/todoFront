import React from 'react'
import {ButtonIcon, Input} from '../../atoms'
import { Container } from './styled'
import {PlusOutlined} from '@ant-design/icons'

const InputTask = ({...props}) => {
  return <Container>
    <Input 
      placeholder="New Task"
      />
    <ButtonIcon icon={
    <PlusOutlined />
    }/>
  </Container>
}

export default InputTask