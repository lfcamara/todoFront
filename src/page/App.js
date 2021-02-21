import './App.css'
import { NewProject } from '../components/organisms'
import { Project } from '../components/templates'
import { Container } from './styled'

function App() {
  return (
    <div className="App">
      <Container>
        <NewProject/>
      </Container>
    </div>
  );
}

export default App;
