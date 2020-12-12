import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(20rem, auto);
  grid-gap: 1rem;
  padding: 1rem;
`;

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating&limit=50"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <Wrapper>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
      </Wrapper>
    );
  }
}

export default App;
