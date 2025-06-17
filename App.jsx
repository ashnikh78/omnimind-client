// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Verify2FAPage from './pages/Verify2FAPage';
import ChatPage from './pages/ChatPage';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        <Route path="/2fa" element={<Verify2FAPage token={token} />} />
        <Route path="/chat" element={<ChatPage token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
