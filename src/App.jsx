import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  const handleDeepLink = () => {
    // For custom scheme
    window.location.href = "alfamind://referral/TEST7244";

    // Or for universal links (e.g., Firebase Dynamic Links)
    // window.location.href = 'https://myapp.page.link/home';
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ padding: 20 }}>
        <h1>Expo Deep Link Tester</h1>
        <button onClick={handleDeepLink}>Open App via Deep Link</button>
      </div>
    </>
  );
}

export default App;
