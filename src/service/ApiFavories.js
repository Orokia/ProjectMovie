export const addFavoriteMovie = async (film) => {
  try {
    const response = await fetch(
      "https://api-media-ipssi.julienpoirier-webdev.com/api/favorites/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: film.id,
          title: film.title,
          poster_path: film.poster_path,
          release_date: film.release_date,
          overview: film.overview,
          status: "pas vu",
        }),
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getFavoritesMovies = async () => {
  try {
    const response = await fetch(
      "https://api-media-ipssi.julienpoirier-webdev.com/api/favorites/movies"
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};