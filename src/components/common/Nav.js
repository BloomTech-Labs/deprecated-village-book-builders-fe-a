import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Affix } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { useUser } from '../../state/UserContext';

const StyledNav = styled(Menu)`
  background-color: #fffff6;
`;

function Nav() {
  const user = useUser();

  return (
    <Affix offsetTop="0">
      <StyledNav mode="horizontal">
        <Menu.Item key="mail" icon={<HomeFilled />}>
          {user.userInfo.role === 'headmaster' && (
            <Link to="/dashboard">Home</Link>
          )}
          {user.userInfo.role === 'admin' && (
            <Link to="/admin/library">Home</Link>
          )}
          {user.userInfo.role === null && <Link to="/">Home</Link>}
        </Menu.Item>
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
