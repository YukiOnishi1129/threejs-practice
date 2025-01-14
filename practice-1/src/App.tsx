import "./App.css";
import { useBoard } from "./hooks/useBoard";

function App() {
  const { mountRef } = useBoard();

  return <div ref={mountRef} />;
}

export default App;
