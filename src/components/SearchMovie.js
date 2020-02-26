import React, { Component } from "react";
import { connect } from "react-redux";
import * as movieActions from "../store/actions/movieActions";

export class SearchMovie extends Component {
  state = {
    name: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button
          onClick={() =>
            this.state.name && this.props.searchMovie(this.state.name)
          }
        >
          Search
        </button>
        {this.props.movies.Search.map((movie, i) => {
          return (
            <div key={i}>
              <h1>{movie.Title}</h1>
              <p>{movie.Year}</p>
              <img alt="" src={movie.Poster} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

const mapDispatchToProps = dispatch => ({
  searchMovie: query => dispatch(movieActions.searchMovie(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
