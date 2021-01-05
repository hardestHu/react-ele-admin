import React,{Component} from 'react';
import './index.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.logInSys = this.logInSys.bind(this)
  }
  render() { 
    return ( 
      <div className='login'>
        <div className="login-area">
          <div className="login-title">
            后台管理系统
          </div>
          <div className="form-group login-name">
            <div className="form-label">用户名</div>
            <div className="form-control">
              <input></input>  
            </div>
          </div>
          <div className="form-group login-pwd">
            <div className="form-label">密码</div>
            <div className="form-control">
              <input></input>  
            </div>
          </div>
          <div className="login-code"></div>

          <div className="login-btn" onClick={this.logInSys}>
            登录
          </div>
        </div>
      </div>
     );
  }
  logInSys(){
    this.props.history.push('/layout')
  }
}
 
export default Login;
