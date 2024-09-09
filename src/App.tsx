import './App.css'; 
import { Greet } from './components/Greet'; 
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'

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
      <PersonList names={nameList}/>

    </div>
  )
}

export default App
