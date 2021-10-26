import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/details'component={Details} /> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
