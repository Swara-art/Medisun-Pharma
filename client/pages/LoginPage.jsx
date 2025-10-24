import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // forms state
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send login/signup API requests
  };
  return (
    <div>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Signup</button>
      {isLogin ? (
        <form onSubmit={handleLogin}>
            <input type="email" id="loginEmail" placeholder="Email" required />
            <input type="password" id="loginPassword" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
            <input type="text" id="firstName" placeholder="First Name" required />
            <input type="text" id="lastName" placeholder="Last Name" required />
            <input type="email" id="signupEmail" placeholder="Email" required />
            <input type="password" id="signupPassword" placeholder="Password" required />
            <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};
export default LoginPage;
