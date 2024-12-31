import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History' 
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
    {/*path for Landing Home and History  */}
    <Header/>
    <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/history' element={<History/>}/>
    
    
    </Routes>
    {/* footer*/}
    <Footer/>
 
      
    </>
  )
}

export default App
