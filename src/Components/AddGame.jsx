import { useNavigate } from "react-router-dom";
import { addGame } from "../Services/Api";
import { useState } from "react";
import "./addGame.css";

const AddGame = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [players, setPlayers] = useState("");
    const [categories, setCategories] = useState("");
    const handleDisable = !title || !description || !players || !categories;
    const navigate = useNavigate();
    
    return (
      <div>
        <h2>Add Your game</h2>
        <form action="">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="">Players</label>
          <input
            type="text"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
          <label htmlFor="">Categories</label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </form>
          <button id="back_button" onClick={() => navigate(-1)}>
            Back
          </button>
          <button
            disabled={handleDisable}
            onClick={() => {
              addGame(title, description, players, categories);
              navigate(-1);
            }}
          >
            Add Game
          </button>
      </div>
    );
}

export default AddGame;