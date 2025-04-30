import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Library from './pages/library/Library'
import GenerateFlashcard from './pages/generate-cards/GenerateFlashcard'

function App() {
  return (
    <Routes>  
      <Route path='/' element={<Home/>}></Route>
      <Route path='/library' element={<Library/>}></Route>
      <Route path='/create' element={<GenerateFlashcard/>}></Route>
    </Routes>
  )
}

export default App
