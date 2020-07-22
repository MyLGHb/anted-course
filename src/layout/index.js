import { Component } from 'react';
import { Link } from 'umi';
import { Layout, Menu, Icon } from 'antd';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

// 引入指定icon图标

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/helloworld">
                <Icon type="pie-chart" />
                <span>Helloworld</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
            >
              <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
            Header
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            My Ant Design ©2020 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;