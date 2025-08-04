import { useEffect } from "react";
import { getTodos } from "./apis/todoApi";

function App() {
  //js

  useEffect(() => {
    getTodos();
  }, []);

  //jsx
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
