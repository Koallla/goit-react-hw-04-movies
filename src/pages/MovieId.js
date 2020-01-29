import React, { Component } from 'react';
import Movie from '../components/Movie';
import { fetchMovieWithId } from '../services/articles-api';

const getIdFromProps = props => props.match.params.id;

export default class MovieId extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    fetchMovieWithId(id).then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <Movie {...movie} />
      </div>
    );
  }
}

// const getIdFromProps = props => props.match.params.id;

// export default class ArticlePage extends Component {
//   state = { article: null };

//   componentDidMount() {
//     const id = getIdFromProps(this.props);
//     articleAPI
//       .fetchArticleWithId(id)
//       .then(article => this.setState({ article }));
//   }

//   handleGoback = () => {
//     const { history, location } = this.props;

//     if (location.state) {
//       return history.push(location.state.from);
//     }

//     history.push('/articles');
//   };

//   render() {
//     const { article } = this.state;

//     return (
//       <div>
//         <h1>Single Article Page</h1>

//         <h2>{JSON.stringify(this.props.location.state)}</h2>
//         {article && <Article {...article} onGoback={this.handleGoback} />}
//       </div>
//     );
//   }
// }
