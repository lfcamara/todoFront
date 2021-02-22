import React, { Component } from 'react'
import { NewProject, NavBar } from '../../components/organisms'
import { ProjectList } from '../../components/templates'
import { Container } from './styled'

import projectService from '../../services/projects'

class Dashboard extends Component  {
  constructor(props) {
        super(props);
        this.projectService = projectService
        this.state = {
          projects: [],
          newProject: false
        }
  }

  async componentDidMount() {
    const response = await this.projectService.get();
    this.setState({projects: response}) 
  }  

  async componentDidUpdate() {
    if (this.state.newProject) {
      const response = await this.projectService.get();
      this.setState({projects: response, newProject: false})
    }
  }  

  setNewProject() {
    this.setState({projects: this.state.projects, newProject: true }) 
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Container>
          <ProjectList projects={this.state.projects} remove={() => this.setNewProject()}/>
          <NewProject createNewProject={() => this.setNewProject()}/>
        </Container>
      </div>
    );
  }

  
}

export default Dashboard;
