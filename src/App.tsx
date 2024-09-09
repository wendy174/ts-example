import './App.css'; 
import { Greet } from './components/Greet'; 
import { Person } from './components/Person'; 

function App() {

  //personName is passed to Person component as a prop 
  const personName = { 
    first: 'Bruce', 
    last: 'Wayne'
  }

  return (
    <div className='App'> 
      <Greet name='Wendy' age={32} isAdult={true} />
      <Person person={personName} />

    </div>
  )
}

export default App
