// src/components/LoginForm.jsx
import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('test');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input" />
      <button type="submit" className="btn">Login</button>
    </form>
  );
}
