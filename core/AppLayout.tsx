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
            <div style={{ padding: '24px', minHeight: '360px', background: colorBgContainer }}>
              { children }
            </div>
          </Content>
        </Layout>
      </Layout>
    </Provider>
  )
}

export default AppLayout
