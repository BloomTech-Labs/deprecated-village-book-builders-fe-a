import React from 'react';
import { useUser } from '../../../state/UserContext';
function Login() {
  const user = useUser();
  console.log(user.userInfo);
  return (
    <div>
      <p>Login Page</p>
    </div>
  );
}

export default Login;
