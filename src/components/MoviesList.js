import React from 'react';
import T from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ movies = [], location }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link
          to={{
            pathname: `/movies/${movie.id}`,
            state: { from: location },
          }}
        >
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
    }),
  ).isRequired,
  location: T.shape({
    pathname: T.string,
  }).isRequired,
};

export default withRouter(MoviesList);
