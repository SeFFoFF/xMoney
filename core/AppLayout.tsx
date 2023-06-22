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
      <Layout className='min-h-screen'>
        <SideBar/>
        <Layout>
          <Header className='p-0' style={{ background: colorBgContainer }} />
          <Content className='m-16px'>
            <div className='min-h-360px p-24px' style={{ background: colorBgContainer }}>
              { children }
            </div>
          </Content>
        </Layout>
      </Layout>
    </Provider>
  )
}

export default AppLayout
