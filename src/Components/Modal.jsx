import React, { useState, useEffect } from "react";
import "./modal.css";

const Modal = ({ game, isOpen, onClose, onSave }) => {
  
  const [gameData, setGameData] = useState("");

  // useEffect para actualizar gameData cuando game cambie
  useEffect(() => {
    if (game) {
      setGameData(game); // Actualiza el estado cuando game esté disponible
    }
  }, [game]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(gameData); // This will call the parent save function
    onClose(); // Close modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Game</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={gameData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={gameData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Players:
          <input
            type="number"
            name="players"
            value={gameData.players}
            onChange={handleChange}
          />
        </label>
        <label>
          Categories:
          <input
            type="text"
            name="categories"
            value={gameData.categories}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
