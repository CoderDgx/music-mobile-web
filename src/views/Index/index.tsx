/* eslint-disable default-case */
import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { TabBar, NavBar, SearchBar } from 'antd-mobile'
import {
  FindActive,
  Find,
  MineActive,
  Mine,
  Yuncun,
  YuncunActive,
  Video,
  VideoActive,
  SliderList
} from '@/assets/icons'

import './index.scss'

export default function index() {
  const tabs = [
    {
      key: 'find',
      title: '发现',
      icon: (active: boolean) => (active ? <FindActive /> : <Find />)
    },
    {
      key: 'mine',
      title: '我的',
      icon: (active: boolean) => (active ? <MineActive /> : <Mine />)
    },
    {
      key: 'friends',
      title: '云村',
      icon: (active: boolean) => (active ? <YuncunActive /> : <Yuncun />)
    },
    {
      key: 'video',
      title: '视频',
      icon: (active: boolean) => (active ? <VideoActive /> : <Video />)
    }
  ]
  const [activeKey, setActiveKey] = useState('find')
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname.split('/').slice(-1)[0]

  const TabBarOnChange = (key: string) => {
    setActiveKey(key)
    navigate(key)
  }
  return (
    <div className="index-wraps">
      <NavBar back={null} left={<SliderList />} className="nav-bar">
        {pathName === 'find' ? <SearchBar className="search-bar" placeholder="请输入内容" /> : ''}
      </NavBar>
      <Outlet />
      <TabBar className="tab-bar" activeKey={activeKey} onChange={TabBarOnChange}>
        {tabs.map((item) => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            style={activeKey === item.key ? { color: '#d81e06' } : {}}
          />
        ))}
      </TabBar>
    </div>
  )
}
