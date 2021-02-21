import React from 'react'
import {Title} from '../../atoms'
import {Task, InputTask} from '../../molecules'
import { List } from 'antd';

const TaskList = ({...props}) => {
  const tasks = ["Description 01", "Description 02", "Description 03"]
  return <List
    header={<Title level={2}>Task List</Title>}
    footer={<InputTask/>}
    bordered
    dataSource={tasks}
    renderItem={itemDescription => (
      <List.Item>
        <Task description={itemDescription}/>
      </List.Item>
    )}
  />
}

export default TaskList