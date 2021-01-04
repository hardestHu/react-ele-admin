import React,{Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.logInSys = this.logInSys.bind(this)
  }
  render() { 
    return ( 
      <div>
        <button onClick={this.logInSys}>登录</button>
      </div>
     );
  }
  logInSys(){
    this.props.history.push('/layout')
  }
}
 
export default Login;
