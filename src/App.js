import './App.css';
import { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <div>
        <h1>User Details Modal</h1>
        <button onClick={handleClick} className="modalTrigger">
          Open Form
        </button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </div>
    </div>
  );
}

export default App;
