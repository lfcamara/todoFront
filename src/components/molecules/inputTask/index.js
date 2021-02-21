import React from 'react'
import {Button} from '../../atoms'
import { Container } from './styled'
import { Input } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

const InputTask = ({...props}) => {
  const addButton = <Button icon={
    <PlusOutlined />
    }/>

  return <Container>
    <Input 
      placeholder="Basic usage"
      suffix={addButton}
      />
  </Container>
}

export default InputTask