import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import Layout from '../components/layout'
import Login from '../components/login'

function AppRouter(){
  return (
    <Router>
      <Route path="/login" component={Login}></Route>
      <Route path="/layout" component={Layout}></Route>
      <Redirect from="/" exact to="/login"></Redirect>
    </Router>
  )
}

export default AppRouter

