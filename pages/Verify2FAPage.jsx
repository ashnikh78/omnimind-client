// src/pages/Verify2FAPage.jsx
import Verify2FAForm from '../components/Verify2FAForm';
import { verify2FA } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function Verify2FAPage({ token }) {
  const navigate = useNavigate();

  const handleVerify = async (data) => {
    await verify2FA(token, data);
    navigate('/chat');
  };

  return <Verify2FAForm onVerify={handleVerify} />;
}
