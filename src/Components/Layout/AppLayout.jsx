import { useState } from 'react';
import './AppLayout.css';
import LogoX from '../../assets/LogoX.png'
import {
  PieChartOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      className='applayout'
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px' }}>
          <img src={LogoX} width='50%' />
        </div>
        <Menu
          style={{ backgroundColor: '#001529', color: 'white', marginTop: '50px' }}
          items={[
            {
              label: "Analytics",
              icon: <PieChartOutlined />
            },
            {
              label: "Add Events",
              icon: <CalendarOutlined />
            },
            {
              label: "Manage Users",
              icon: <UserOutlined />
            }

          ]}
        >
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px' }}>
            <img src={LogoX} width='150px' />
          </div>

        </Header>
        <Content>
          <div
            style={{
              padding: 24,
              height: '100%',
              background: '#F3F6FA',
            }}
          >
            Content Here
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: colorBgContainer
          }}
        >
          Footer Here
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;