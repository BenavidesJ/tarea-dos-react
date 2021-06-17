import React from "react";
import apiCall from "./apiCall";
import { MoviesList } from "./components/MoviesList";
import {Movies} from './components/MoviesList';



class App extends React.Component<Movies> {


  onQuerySubmit = async (query:any) => {
    const response = await apiCall.get('/search/movie', {
      params: {
        query: query,
        include_adult: false
      }
    })
    this.setState({
      movies: response.data.results,
      selectedMovie: response.data.results[0]
    })
  }
  

  onMovieSelect = (movie:Movies) => {
    console.log('App',movie)
    this.setState({selectedMovie:movie})
  }

  getUpcoming = async () => {
    const response = await apiCall.get('/movie/upcoming')
    console.log('Upcomming movies', response.data.results)
  }

  getTopRated = async () => {
    const response = await apiCall.get('/movie/top_rated')
    console.log('Top Rated movies', response.data.results)
  }

  getPopularMovies = async () => {
    const response = await apiCall.get('/movie/popular')
    console.log('Popular movies', response.data.results)
  }

  render(){
    return(
      <div className="container">
          <button type="button" onClick={this.getUpcoming} className="btn btn-success">Upcomming Movies</button>
          <button type="button" onClick={this.getTopRated} className="btn btn-info">Top Rated Movies</button>
          <button type="button" onClick={this.getPopularMovies} className="btn btn-warning">Popular Movies</button>
          <MoviesList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;