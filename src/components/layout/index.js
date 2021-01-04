
import React from 'react'
import {Route,Link} from 'react-router-dom'
import Home from '../../pages/home/index.js'
import './index.css'

function Layout(){
  return (
    <div className="layout">
      <div className="topInfo">顶部登录用户信息栏</div>
      <div className="bottomInfo">
        <div className="leftMenu">
          <Link to="/layout/home">首页</Link>
        </div>
        <div className="rightContent">
          <div className="topNav">打开页面栏</div>
          <div className="pageContent">
            <Route path="/layout/home" exact component={Home}></Route>   
          </div> 
        </div>
      </div>
     
    </div>

  )
}
export default Layout