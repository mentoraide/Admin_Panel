import React, { useState } from 'react';
import {} from '@ant-design/icons';
import { Layout, theme , Typography} from 'antd';
import './onBoardingLayout.css'
import LoginForm from '../Forms/LoginForm';
const { Sider } = Layout;
const {Title} = Typography;
import English from '../Texts/English.json'
import SignupForm from '../Forms/SignUpForm';
import ResetPassword from '../Forms/ResetPassword';
import LogoXextended from '../../assets/LogoXextended.png';
import LogoX from '../../assets/LogoX.png'


const OnboardingLayout = () => {

  const [formState, setFormState] = useState('login');

  return (
    <Layout>
       <Layout >
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <img src={LogoXextended} width='450px'/>
        </div>
     </Layout>
      <Sider
        className='onboardingSider'
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={400}
      >
        {/* <Title level={2}>{English.productName} </Title> */}
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <img src={LogoX} width='200px'/>
        </div>
        <div className="dynamicForm">
        

        {formState === 'login'  && <LoginForm setFormState={setFormState}/> }
        {formState === 'signup' && <SignupForm setFormState={setFormState}/>}
        {formState === 'resetPassword' &&  <ResetPassword setFormState={setFormState}/>}
        
        </div>
      </Sider>
      
    </Layout>
  );
};
export default OnboardingLayout;