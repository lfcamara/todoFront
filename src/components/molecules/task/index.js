import React from 'react'
import { ButtonIcon, Title } from '../../atoms'
import { TaskComponent, Body, DivRight, Description } from './styled'
import {CheckOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons'
import { colors } from '../../../colors'

const Task = ({description, finishDate, ...props}) => {
  const color = colors.white
  return <TaskComponent 
    hoverable
    color={ colors.blue }
    {...props}>
    <Body>
      <Description>{ description }</Description>
      <DivRight>
        <ButtonIcon color={ color } icon={<CheckOutlined />}/>
        <ButtonIcon color={ color } icon={<EditOutlined />}/>
        <ButtonIcon color={ color } icon={<DeleteOutlined />}/>
    </DivRight>
    </Body>
      
  </TaskComponent> 
}

export default Task