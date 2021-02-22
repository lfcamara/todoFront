import React from 'react'
import {Title} from '../../atoms'
import {Task, InputTask} from '../../molecules'
import { List } from 'antd';

const TaskList = ({tasks, ...props}) => {
  const taskL = tasks.map(task => {
      return <Task description={task.description} finishDate={task.finishedAt ? task.finishedAt : undefined}/>
  })
  return <List
    header={<Title level={2}>Task List</Title>}
    bordered
  > 
  {taskL}
    <InputTask/>
  </List>
}

export default TaskList