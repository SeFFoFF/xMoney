'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { Layout, theme } from 'antd'
import { SideBar } from './SideBar'

const { Header, Content } = Layout

const AppLayout = ({ children }): JSX.Element => {
  const { token: { colorBgContainer } } = theme.useToken()

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '16px' }}>
            <div style={{ minHeight: '360px', height: '100%', maxHeight: 'calc(100vh - 100px)' }}>
              { children }
            </div>
          </Content>
        </Layout>
      </Layout>
    </Provider>
  )
}

export default AppLayout
