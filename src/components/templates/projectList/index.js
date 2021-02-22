import React from 'react'
import { Project } from '../index'
import { List } from 'antd';


const ProjectList = ({projects, remove, ...props}) => {
  

  const projectList = projects.map((project) => {
    return <Project project={project} remove={remove}/>
  })

  return <List
  bordered
>{projectList}</List>
}

export default ProjectList