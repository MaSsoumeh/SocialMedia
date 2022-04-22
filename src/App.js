import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  if (!user) {
    return <Login setUser={setUser} />;
  }
  return <div className="App">App</div>;
}

export default App;
