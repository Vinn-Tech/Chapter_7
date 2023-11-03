import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMovieList } from '../redux/actions/getMovies';
// import { setMovies } from '../redux/reducers/movie/authMovie';
// import { GetMovieList, setMovies } from '../authMovie';

const ReduxDashboard = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieBox.movies);

  useEffect(() => {
    dispatch(GetMovieList())
      .then(() => {

      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const Popular = movieData.movies
  console.log(Popular, 'popular')

  return (
  <div>
    <h1>Popular Movies</h1>
    {Popular ? (
      <div className="movie-list">
        {Popular.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);

};

export default ReduxDashboard;
