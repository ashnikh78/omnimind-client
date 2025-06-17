// src/components/Verify2FAForm.jsx
import { useState } from 'react';

export default function Verify2FAForm({ onVerify }) {
  const [token, setToken] = useState('123456'); // for dev, fixed

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify({ token });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter OTP" className="input" />
      <button type="submit" className="btn">Verify</button>
    </form>
  );
}
