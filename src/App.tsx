import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Library from './pages/library/Library'
import GenerateFlashcard from './pages/generate-cards/GenerateFlashcard'
import Flashcards from './pages/flashcards/Flashcards'
import NotFound from './components/not-found/NotFound'

function App() {
  return (
    <Routes>  
      <Route path='/' element={<Home/>}></Route>
      <Route path='/library' element={<Library/>}> 
      </Route>
      <Route path='/library/:Id' element={<Flashcards/>}></Route>
      <Route path='/create' element={<GenerateFlashcard/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

export default App
