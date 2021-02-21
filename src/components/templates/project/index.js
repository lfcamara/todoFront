import React from 'react'
import {Button, Title} from '../../atoms'
import {TaskList} from '../../organisms'
import { Card } from 'antd';
import { Header, HeaderRight } from './styled'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'

const Project = ({...props}) => {
  const title = 'meu projeto'
  const header = <Header>
    <Title level={1}>{title}</Title>
    <HeaderRight>
      <Button icon={<EditOutlined />}/>
      <Button icon={<DeleteOutlined />}/>
    </HeaderRight>
  </Header>

  return <Card>
    {header}
    <TaskList/>
  </Card>
}

export default Project