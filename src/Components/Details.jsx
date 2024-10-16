import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGamesById, putGames } from "../Services/Api";
import Modal from "./Modal";
import "./details.css";

const Details = () => {
  const [gameById, setGameById] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGamesById(id).then((game) => setGameById(game));
  }, [id]);

  const handleSave = (updatedGame) => {
    setGameById((prevGames) =>
      prevGames.map((g) => (g.id === updatedGame.id ? updatedGame : g))
    );
    putGames(id, updatedGame.title, updatedGame.description, updatedGame.players, updatedGame.categories)
  };

  return (
    <div className="details_container">
      <button id="back_button" onClick={() => navigate(-1)}>
        Back
      </button>
      {gameById &&
        gameById.map((game) => (
          <div key={game.id}>
            <h3>Title: {game.title}</h3>
            <h3>Description: {game.description}</h3>
            <h3>Players: {game.players}</h3>
            <h3>Categories: {game.categories}</h3>
            <button
              onClick={() => {
                setSelectedGame(game);
                setOpenModal(true);
              }}
              id="edit_button"
            >
              Edit
            </button>
          </div>
        ))}
      <Modal
        game={selectedGame}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default Details;
