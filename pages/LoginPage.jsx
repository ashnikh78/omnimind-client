// src/pages/LoginPage.jsx
import LoginForm from '../components/LoginForm';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ setToken }) {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    const res = await login(credentials);
    if (res.data.token) {
      setToken(res.data.token);
      navigate('/2fa');
    }
  };

  return <LoginForm onLogin={handleLogin} />;
}
