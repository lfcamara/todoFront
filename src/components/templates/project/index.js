import React from 'react'
import {ButtonIcon, Title} from '../../atoms'
import {TaskList} from '../../organisms'
import { CardComponent, Header,Container, HeaderRight } from './styled'
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {colors} from '../../../colors'
import projectService from '../../../services/projects'

const Project = ({project, remove, ...props}) => {
  const del = async () => {
    await projectService.delete(project._id);
    remove();
  }
  const header = <Header>
                  <HeaderRight>
                    <ButtonIcon color={colors.blue} icon={<EditOutlined />}/>
                    <ButtonIcon 
                      color={colors.blue}
                      icon={<DeleteOutlined />}
                      onClick={() => del()}
                    />
                  </HeaderRight>
                  <Container>
                    <Title level={1}>{project.title}</Title>
                  </Container>
                </Header>

  return <CardComponent>
    {header}
    <TaskList tasks={project.tasks}/>
  </CardComponent>
}

export default Project