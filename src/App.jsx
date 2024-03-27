import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './PortfolioContainer/Home/Profile'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>HELLO WORLD</h1>
     <button onClick={()=> setCount((countbb) + 1)}> click to count {countbb}
     
     </button> */}

     <Profile/>
    
    </>
  )
}

export default App;
