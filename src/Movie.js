import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Box = styled.div`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const Poster = styled.img``;

const Data = styled.div``;

const Title = styled.h3``;

const Year = styled.h5``;

function Movie({ id, year, title, summary, poster }) {
  return (
    <Box>
      <Poster src={poster} alt={title} title={title} />
      <Data>
        <Title>{title}</Title>
        <Year>{year}</Year>
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
};

export default Movie;
