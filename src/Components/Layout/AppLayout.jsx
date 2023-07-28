import { useState } from 'react';
import './AppLayout.css';
import LogoX from '../../assets/LogoX.png'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
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
        {/* style={{backgroundColor: 'rgb(3,78,162)'}} defaultSelectedKeys={['1']} mode="inline" items={items} */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '20px 0px 20px 0px' }}>
          <img src={LogoX} width='100px' />
        </div>
        <Menu
          style={{ backgroundColor: 'rgb(3,78,162)', color: 'white' }}
          items={[
            {
              label: "Employees"
            },
            {
              label: "Offers"
            },
            {
              label: "RGDs"
            },
            {
              label: "Allocation"
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