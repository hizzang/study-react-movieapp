import React from 'react';
import axios from 'axios';

import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  }

  getMovies = async () => {
    // 구조 분해 할당 
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    
    this.setState({movies: movies, isLoding: false})
    //console.log(movies);
    //console.log(this.state.movies);


  }
  componentDidMount(){
    this.getMovies();
  }


  render() {
    const { isLoding, movies } = this.state;

    return (
      <>
        { isLoding ? (
          <div className="loader">
            <span className="loader__text">Loding...</span>
          </div>
          ) : (
          <div className="movies">
            {
              movies.map(movie => (
                <Movie
                  key={movie.id} 
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
                )
              )
            }
          </div>
          )
        }
      </>
    )
  }
  
  }
export default Home;
