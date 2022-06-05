import React from 'react'

import './index.scss'
import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/images/logo.png'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home-wrap">
      <div className="home-logo">
        <img className="home-logo-wh" src={logo} alt="" />
      </div>
      <div className="home-button">
        <div className="iphone-login">
          <Button className="login-button">手机号登录</Button>
        </div>
        <div className="temporary-login">
          <Button onClick={() => navigate('/index/find')} className="temporary-button">
            立即体验
          </Button>
        </div>
      </div>
    </div>
  )
}
