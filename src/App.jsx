
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import ProtectedRoutes from './components/ProtectedRouter'


function App() {


  return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedexdetail/:id' element={<PokedexDetail/>}/>
          </Route>
        </Routes>
      </HashRouter>

  )
}

export default App
