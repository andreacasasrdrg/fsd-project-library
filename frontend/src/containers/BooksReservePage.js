import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getBooks} from '../actions';

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getBooks();
  }i

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submited: ' + this.state.value);
    event.preventDefault();
  }



  render() {

      const { books } = (this.props);

      const booksList=
        books.map(books =>
          <tr>
            <td key={books.id}>{books.name}</td>
            <td >
              <button type="submit" class="btn btn-primary btn-round col-form-label" style={{marginRight: '2em'}}>Editar</button>
              <button type="submit" class="btn btn-danger btn-round col-form-label">Borrar</button>
            </td>
          </tr>
        );

    return (
      <div class= "container-fluid"
        style={{
        paddingTop: '30px',
        paddingLeft: '50px',
        paddingRight: '50px'
      }}>

        <div class="col-sm-9">
          <h1 style={{
            fontWeight: '500',
          }}>
            <Link className="breadcrumbLink" to="/">Mi Biblioteca </Link>
            <span style={{color: '#707070'}}>/</span>
            <Link className="breadcrumbLink" to="/libros"> Libros </Link>/ Reservar</h1>

        </div>

        <div style={{height: '3em'}}></div>

        <div class="col-sm-9">
          <h4 style={{
            fontWeight: '600',
          }}>Libros disponibles actualmente:</h4>

        </div>

        <div style={{height: '4em'}}></div>


          <div class="col-sm-9">
            <table class="table" style={{}}>

              <thead >
                <tr style={{textIndent: '-10px'}}>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody style={{textIndent: '-10px'}}>
                {booksList}
              </tbody>

            </table>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks())
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
