

import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/ping')
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div className="p-6 text-xl">
      <h1 className="text-2xl font-bold">AI Resume Analyzer</h1>
      <p className="mt-4 text-green-600">{msg}</p>
    </div>
  );
}

export default App;
