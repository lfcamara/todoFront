import React, { Component } from 'react'
import {Title, ButtonIcon} from '../../atoms'
import { Input } from '../../atoms';
import {PlusOutlined} from '@ant-design/icons'
import { Header, Container, Footer } from './styled'

import projectService from '../../../services/projects'

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.projectService = projectService
    this.state = {
      projectName: ''
    }
  }

  setProjectName(event) {
    this.setState({projectName: event.target.value}) 
  }

  createProject() {
    const body = {
      title: this.state.projectName
    }
    this.projectService.post(body)
    this.setState({projectName: ''})
    this.props.createNewProject();
  }


  render() {
    return <Container>
      <Header>
        <Title> Novo Projeto </Title>
      </Header>
      <Footer>
        <Input 
          size="large" 
          placeholder='Adicionar Task'
          value={ this.state.projectName }
          onChange={ (event) => this.setProjectName(event) }/>
        <ButtonIcon icon={
          <PlusOutlined/>
        }
        onClick={() => this.createProject() }
        />
      </Footer>
    </Container>
  }
  
}

export default NewProject