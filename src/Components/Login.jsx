import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('https://core.mainotp.in/includes/api.php',
        new URLSearchParams({
          action: 'ValidateLogin',
          username: 'M7RGUVuHF8tdbOrqactl6hanAARQhai3',
          password: 'U1ZExMaxKOmz0Pi2DcmGYunowkDnggNL',
          email,
          password2: password,
          responsetype: 'json'
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
          },
          withCredentials: true
        }
      );
      
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address *</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 text-sm font-bold">Password *</label>
              <a href="#" className="text-green-500 text-sm">Forget</a>
            </div>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700 text-sm">Remember me</label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered with us?  
          <a href="#" className="text-[#25A75B] ml-1">Sign In</a> or  
          <a href="#" className="text-[#25A75B] ml-1">Reset Password</a>  
          <a 
            onClick={() => navigate('/register')}  
            className="text-[#25A75B] ml-1 cursor-pointer"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
