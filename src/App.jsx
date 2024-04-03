import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import Footer from './PortfolioContainer/Home/Footer/Footer';
import NavBar from './PortfolioContainer/Nav-bar/NavBar';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>HELLO WORLD</h1>
     <button onClick={()=> setCount((countbb) + 1)}> click to count {countbb}
     
     </button> */}
     <NavBar/>
     <Profile/>
     {/* <Footer/> */}
    
    </>
  )
}

export default App;
