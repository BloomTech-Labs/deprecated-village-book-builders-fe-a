import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Affix } from 'antd';
import { HomeFilled, SettingOutlined } from '@ant-design/icons';
import { useUser } from '../../state/UserContext';

const { SubMenu } = Menu;

const StyledNav = styled(Menu)`
  background-color: #fffff6;
`;

function Nav() {
  const user = useUser();

  return (
    <Affix offsetTop="0">
      <StyledNav
        mode="horizontal"
        style={{
          justifyContent: 'center',
          display: 'flex',
          position: 'relative',
        }}
      >
        <Menu.Item key="mail" icon={<HomeFilled />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Profiles">
          <Menu.ItemGroup>
            <Menu.Item key="village">Village Profile</Menu.Item>
            <Menu.Item key="library">Library Profile</Menu.Item>
            <Menu.Item key="school">School Profile</Menu.Item>
            <Menu.Item key="students">Studen Profiles</Menu.Item>
            <Menu.Item key="user">Your Profile</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
        <Menu.Item>
          {user.userInfo.role ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Menu.Item>
      </StyledNav>
    </Affix>
  );
}

export default Nav;
