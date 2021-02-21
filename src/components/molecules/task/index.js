import React from 'react'
import { Button } from '../../atoms'
import { TaskComponent, Body, DivRight } from './styled'
import {CheckOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons'

const Task = ({description, ...props}) => {
  return <TaskComponent 
    hoverable
    color={{
      primary: '#311D3F',
      secundary: '#EEEEEE'
    }}
    {...props}>
    <Body>
      { description }
      <DivRight>
        <Button icon={<CheckOutlined />}/>
        <Button icon={<EditOutlined />}/>
        <Button icon={<DeleteOutlined />}/>
    </DivRight>
    
    </Body>
      
  </TaskComponent> 
}

export default Task