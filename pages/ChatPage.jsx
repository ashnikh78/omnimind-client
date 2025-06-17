// src/pages/ChatPage.jsx
import { useEffect, useState } from 'react';
import { getSessionInfo } from '../api/auth';
import ChatWindow from '../components/ChatWindow';

export default function ChatPage({ token }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSessionInfo(token).then(res => setSession(res.data));
  }, [token]);

  return session ? <ChatWindow session={session} /> : <p>Loading session...</p>;
}
