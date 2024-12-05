import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Post } from './pages/Post'
import { Posts } from './pages/Posts'
import { Publish } from './pages/Publish'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/post/:id' element={<Post/>}/>
      <Route path='/publish' element={<Publish/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
