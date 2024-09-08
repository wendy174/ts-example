import './App.css'
import  { Greet } from './components/Greet'

function App() {

  return (
    <div className='App'> 
      <Greet name='Wendy' age={32} isAdult={true} />
    </div>
  )
}

export default App
