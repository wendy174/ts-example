import './App.css'; 
import { Greet } from './components/Greet'; 
import { Greet2 } from './components/Greet2'; 
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'; 
import { Heading } from './components/Heading'; 
import { Oscar } from './components/Oscar'; 

function App() {

  //personName is passed to Person component as a prop 
const nameList = [
  { first: 'Wendy', last: 'Yeung'}, 
  { first: 'Anthony', last: 'Yeung'}, 
  { first: 'Cindy', last: 'Yeung'}
]

  return (
    <div className='App'> 
      <Greet name='Wendy' age={32} isAdult={true} />
      <Greet2 name='Wendy' isAdult={true}/>
      <PersonList names={nameList}/>
      <Status status='error'/>
      <Heading>Placeholder text</Heading> 
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

    </div>
  )
}

export default App
