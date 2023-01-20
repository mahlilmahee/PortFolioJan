import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Particle from './Component/Particle'
import Appbar from './Component/Appbar'
// import TextAnimator from './Component/TextAnimator'
import Proimg from './Component/Proimg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'
import Mylife from './pages/Mylife'


function App() {
 
  return (
    <div className="App">

<BrowserRouter>
<Appbar></Appbar>
<Routes>

  <Route  path='/' element={<Home></Home>}>

  </Route>
  <Route  path='/blog' element={<Blog></Blog>}>

  </Route>
  <Route  path='/projects' element={<Projects></Projects>}>

  </Route>
  <Route  path='/contact' element={<Contact></Contact>}>

  </Route>
  <Route  path='/thanks' element={<Thanks></Thanks>}>

  </Route>
  <Route  path='/aboutme' element={<Mylife></Mylife>}>

  </Route>
</Routes>
</BrowserRouter>
<h3 className="emailsticky"> mahlilmahee@gmail.com </h3>
      

   
    </div>
  )
}

export default App
