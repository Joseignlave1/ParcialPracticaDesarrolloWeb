import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGamesById } from "../Services/Api";
import "./details.css"
const Details = () => {
    const [gameById, setGameById] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getGamesById(id).then((game) => setGameById(game));
    },[id])

    return (
        <div className="details_container">
            <button id="back_button" onClick={() => navigate(-1)}>Back</button>
            {gameById && gameById.map((game) => {
                return (
                  <div key={game.id}>
                    <h3>Title: {game.title}</h3>
                    <h3>Description{game.description}</h3>
                    <h3>Players: {game.players}</h3>
                    <h3>Categories: {game.categories}</h3>
                  </div>
                );
            })}
        </div>
    )
}

export default Details;

