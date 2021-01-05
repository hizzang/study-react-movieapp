import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
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
          <div class="loader">
            <span class="loader__text">Loding...</span>
          </div>
          ) : (
          <div class="movies">
            {
              movies.map(movie => (
                <Movie
                  key={movie.id} 
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
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
export default App;
