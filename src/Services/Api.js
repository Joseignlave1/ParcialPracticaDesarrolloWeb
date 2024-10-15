export const getGames = async () => {
    const response = await fetch("http://localhost:3000/api/games");
    const json = await response.json();
    return json;
}

export const getGamesById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/games/${id}`);
    const json = await response.json();
    return json;
}

export const addGame = async (gameTitle, gameDescription, gamePlayers, gameCategories) => {
    const response = await fetch("http://localhost:3000/api/games", {
      method: "POST",
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
}

//No espero un json ya que la request solo me devuelve un parametro OK si el recurso fue eliminado.

export const deleteGame = async (id) => {
    const response = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: "DELETE",
    });

    return response;
}
