import { useEffect, useState } from "react";
import { getGames, deleteGame } from "../Services/Api";
import { useNavigate} from "react-router-dom";
import "./home.css";
const Home = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getGames().then((game) => setGames(game));
        refreshGames();
    }, [])
  
    const handledDelete = async (id) => {
      const response = await deleteGame(id);
      if(response.ok) {
        refreshGames();
      }
    }

    //Hago otro GET para mostrar los juegos actualizados luego de que elimine uno
    //Tambien podria aplicar un filter y filtrar en un nuevo array todos los juegos que no coinciden con la id 
    //Del juego eliminado
    const refreshGames = async () => {
      const updatedGames = await getGames();
      setGames(updatedGames);
    }
    return (
      <div className="games_container">
        <div className="home_container">
          <h1 id="title">Welcome to the Olympic Games</h1>
          <button
            id="add_game_button"
            onClick={() => navigate("/games/addGame")}
          >
            Add Game
          </button>
        </div>
        <div className="card_container">
          {games.length ?
            games.map((game) => {
              return (
                <div className="card" key={game.id}>
                  <h3>{game.title}</h3>
                  <div className="buttons">
                    <button
                      id="details_button"
                      onClick={() => navigate(`/games/${game.id}`)}
                    >
                      Details
                    </button>
                    <button
                      id="delete_button"
                      onClick={() => handledDelete(game.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }) : (
              <h2 className="home_no_games">No hay juegos para mostrar</h2>
            )}
        </div>
      </div>
    );
}

export default Home;