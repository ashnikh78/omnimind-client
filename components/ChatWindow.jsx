// src/components/ChatWindow.jsx
export default function ChatWindow({ session }) {
  return (
    <div className="p-4">
      <h2>Welcome, session active ✅</h2>
      <p>Device Fingerprint: {session.fingerprint}</p>
      <div className="mt-6 border p-4 rounded">🔮 Ollama Chat UI Coming...</div>
    </div>
  );
}
