import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Layout from './Pages/Layout'
const App = () => {

  return(
    <div className='bg-gray-900'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App