import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const Box = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;

const Poster = styled.img`
  max-width: 100%;
`;

const Data = styled.div``;

const Title = styled.h3``;

const Year = styled.h5``;

const List = styled.ul``;

const Genre = styled.li``;

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Box>
      <Poster src={poster} alt={title} title={title} />
      <Data>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <List>
          {genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </List>
      </Data>
    </Box>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
