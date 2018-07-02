import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { getBooks, getAuthors, getGenres} from '../actions';

class HomePage extends Component {

  componentWillMount() {
    this.props.getGenres();
    this.props.getAuthors();
    this.props.getBooks();
  }
  render() {

    const { books, genres, authors} = this.props;

    return (

        <div className="container-fluid"

          style={{
          paddingTop: '30px',
          paddingLeft: '50px',
          paddingRight: '50px'
        }}>


          <div className="col-sm-9">

            <h1 style={{
              fontWeight: '500'

            }}>Mi Biblioteca</h1>
          </div>

          <div  className="col-sm-9" style={{display: 'flex', alignItems: 'center', paddingTop: '2em'}}>
          <img src={require('../img/principal.jpg')} alt={'Mi biblioteca'} width='100%' />
          </div>

          <div className="col-sm-9" style={{display: 'flex', flexFlow: 'row', justifyContent: 'space-between', paddingTop: '3em'}}>

              <Link className="btn btn-info btn-lg btn-round" style={{width: "150px"}} to="/generos">
                  <span>{genres.length} Géneros</span>
              </Link>

              <Link className="btn btn-info btn-lg btn-round" style={{width: "150px"}} to="/autores">
                  <span >{authors.length} Autores</span>
              </Link>

              <Link className="btn btn-info btn-lg btn-round" style={{width: "150px"}} to="/libros">
                  <span>{books.length} Libros</span>
              </Link>


            </div>

        </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    genres: state.genres,
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  getGenres: () => dispatch(getGenres()),
  getAuthors: () => dispatch(getAuthors())
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
