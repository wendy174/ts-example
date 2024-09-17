import './App.css'; 
import { Greet } from './components/Greet'; 
import { Greet2 } from './components/Greet2'; 
import { Person } from './components/Person';
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'; 
import { Heading } from './components/Heading'; 
import { Oscar } from './components/Oscar'; 
import { Button } from './components/Button'; 
import { Input } from './components/Input'; 
import { Styles } from './components/Styles'
import { Login } from './components/Login';

function App() {

  //personName is passed to Person component as a prop 
const nameList = [
  { first: 'Wendy', last: 'Yeung'}, 
  { first: 'Anthony', last: 'Yeung'}, 
  { first: 'Cindy', last: 'Yeung'}
]

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { 
  console.log('Button Clicked', event)
}

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => ( 
  console.log(event)
)

  return (
    <div className='App'> 
      <Login />
      <PersonList names = {nameList}/>
      <Greet name='Wendy' age={32} isAdult={true} />
      <hr></hr>
      <Greet2 name='Wendy' isAdult={true}/>
      <hr></hr>
      <Status status='error'/>
      <hr></hr>
      <Heading>Placeholder text</Heading>
      <hr></hr>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>     
      <hr></hr>
      <Button handleClick={handleClick}/>
      <hr></hr>
      <Input value='' handleChange= {handleChange} />
      <hr></hr>
      <Styles styles={{border: '5px solid black', padding: '5rem'}} />
    </div>
  )
}

export default App
