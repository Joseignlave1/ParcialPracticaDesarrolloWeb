const API_url = "http://localhost:3000/api/games";

//GET all games
export const getGames = async () => {
  try {
    const response = await fetch(API_url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const responsejson = await response.json();
    return responsejson;
  } catch (error) {
    console.log(error.message);
  }
};


//GET a game by id
export const getGamesById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/games/${id}`); 
        if(!response.ok) {
         throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json();
        console.log(json);
        return json;
     } catch (error) {
         console.log(error.message);
     }
}

//Create a game
export const addGame = async (gameTitle,gameDescription,gamePlayers,gameCategories) => {
    try {
        const response = await fetch(API_url, {
            method: "POST",
            body: JSON.stringify({
                title: gameTitle,
                description: gameDescription,
                players: gamePlayers,
                categories: gameCategories,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error.message);
    }
}

//No espero un json ya que la request solo me devuelve un parametro OK si el recurso fue eliminado.
//Delete a game
export const deleteGame = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/games/${id}`, {
            method: "DELETE",
        }); 
        if(!response.ok) {
         throw new Error(`Response status: ${response.status}`)
        }
        return response;
     } catch (error) {
         console.log(error.message);
     }
}

export const putGames = async (
  id,
  gameTitle,
  gameDescription,
  gamePlayers,
  gameCategories
) => {
  const response = await fetch(`http://localhost:3000/api/games/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: gameTitle,
      description: gameDescription,
      players: gamePlayers,
      categories: gameCategories,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  return json;
};
