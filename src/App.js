import React from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(20rem, auto);
  grid-gap: 1rem;
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.section`
  font-size: 3rem;
  font-weight: 600;
  width: 98%;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${(props) => props.theme.blackColor};
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
        <Header>Movie App</Header>
        <Grid>
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
        </Grid>
      </Wrapper>
    );
  }
}

export default App;
