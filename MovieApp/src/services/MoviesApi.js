const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "f030b2a2886a523f9e2a0c63ad4ace56";

export const getAllMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const getSearchMovies = async (query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
};



