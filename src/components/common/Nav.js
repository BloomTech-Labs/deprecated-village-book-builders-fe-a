import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Affix } from 'antd';
import { HomeFilled, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const StyledNav = styled(Menu)`
  background-color: #fffff6;
`;

function Nav() {
  return (
    <Affix offsetTop="0">
      <StyledNav mode="horizontal">
        <Menu.Item key="mail" icon={<HomeFilled />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Profiles">
          <Menu.ItemGroup>
            <Menu.Item key="village">Village Profile</Menu.Item>
            <Menu.Item key="library">Library Profile</Menu.Item>
            <Menu.Item key="school">School Profile</Menu.Item>
            <Menu.Item key="students">Studen Profiles</Menu.Item>
            <Menu.Item key="user">Your Profile</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="">
          <Link to="/">Logout</Link>
        </Menu.Item>
      </StyledNav>
    </Affix>
  );
}

export default Nav;
