import {BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from '../components/layout'
import Login from '../components/login'

function AppRouter(){
  return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/layout"  component={Layout}></Route>
      <Route path="/" exact  component={Login}></Route>
    </Router>
  )
}

export default AppRouter

