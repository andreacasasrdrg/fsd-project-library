import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks, getAuthors, getGenres, createBook, deleteBook, updateBook } from '../actions';

class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    newTitle : '',
    newIsbn : '',
    newGenre: [],
    newAuthor: '',
    newSummary:'',
    bookId: '',
    isEditing: false
  };

    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputIsbn = this.handleInputIsbn.bind(this);
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleAuthorSelection = this.handleAuthorSelection.bind(this);
    this.handleInputSummary = this.handleInputSummary.bind(this);

    this.handleCreateBook = this.handleCreateBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleUpdateBook = this.handleUpdateBook.bind(this);
    this.handleEditToggleOn = this.handleEditToggleOn.bind(this);
    this.handleEditToggleOff = this.handleEditToggleOff.bind(this);
  }

  componentWillMount() {
    this.props.getBooks();
    this.props.getAuthors();
    this.props.getGenres();
  }

  handleInputTitle(event) {
    this.setState({
      newTitle: event.target.value
    })
  }

  handleInputIsbn(event) {
    this.setState({
      newIsbn: event.target.value
    })
  }

  handleGenreSelection(event) {
    this.setState({
      newGenre: event.target.value
    })
  }

  handleAuthorSelection(event) {
    console.log(event.target.value);
    this.setState({
      newAuthor: event.target.value
    })
  }

  handleInputSummary(event) {
    this.setState({
      newSummary: event.target.value
    })
  }

  handleCreateBook(event) {
    this.setState({
      newTitle : '',
      newGenre : '',
      newAuthor : '',
      newIsbn : '',
      newSummary : ''
    })
    this.props.createBook(
      this.state.newTitle,
      this.state.newIsbn,
      this.state.newGenre,
      this.state.newAuthor,
      this.state.newSummary);
  }

  handleDeleteBook( bookId ) {

    this.props.deleteBook( bookId );
  }

  handleEditToggleOn(bookId) {
     const selectedBook = this.props.books.filter( book => book._id == bookId )[0];
     const bookGenres = selectedBook.genre.map(genreUnit => genreUnit._id);

     const newTitle = selectedBook.title;
     const newGenre = bookGenres;
     const newIsbn = selectedBook.isbn;
     const newAuthor = selectedBook.author && selectedBook.author._id;
     const newSummary = selectedBook.summary;

     this.setState({
         bookId,
         newTitle,
         newGenre,
         newIsbn,
         newAuthor,
         newSummary,
         isEditing: true
     });
   }

   handleEditToggleOff(){
     this.setState({
       isEditing : false,
       newTitle : '',
       newAuthor : '',
       newGenre : '',
       newIsbn : '',
       newSummary : ''
     })
   }

  handleUpdateBook(bookId, event) {
    this.setState({
      isEditing : false,
      newTitle : '',
      newAuthor : '',
      newGenre : '',
      newIsbn : '',
      newSummary : ''
    })
    this.props.updateBook(
      bookId,
      this.state.newTitle,
      this.state.newIsbn,
      this.state.newGenre,
      this.state.newAuthor);
  }




  render() {

    const createSaveButton = this.state.isEditing ? (
      <div
        style ={{ marginLeft: '1.5em' }}
      >
          <button
            onClick = { this.handleUpdateBook }
            type = 'submit'
            className = 'btn btn-success btn-round col-form-label'
            style = {{width: '150px'}}
            >Guardar
          </button>
          <button
            onClick = { this.handleEditToggleOff }
            type = 'submit'
            className = 'btn btn-danger btn-round col-form-label'
            style = {{ marginLeft: '1.5em', width: '150px'}}
            >Cancelar
          </button>
      </div>
    ) : (
      <button
          onClick = { this.handleCreateBook }
          type = 'submit'
          className = 'btn btn-success btn-round col-form-label'
          style = {{ marginLeft: '1.5em', width: '150px' }}
          >Crear
        </button>
    );

      const { books, genres, authors } = (this.props);

      const bookList = books.map(book =>
       <tr key={book._id}>
        <td> {book.title} </td>
        <td> {book.isbn} </td>
        <td> {book.genre.map( genre => {
          return ( <p key={genre._id}> {genre.name}</p>)})} </td>
        <td> {book.author.first_name} {book.author.family_name}</td>
        <td >
          <button
            type="submit"
            onClick = { this.handleEditToggleOn.bind(this, book._id) }
            className="btn btn-primary btn-round col-form-label"
            style={{marginRight: '2em'}}
            >Editar
          </button>
          <button
            type="submit"
            onClick = { this.handleDeleteBook.bind(this, book._id) }
            className="btn btn-danger btn-round col-form-label"
            >Borrar
          </button>
        </td>
      </tr>);

      const optionListAuthor = authors.map(author =>
       <option key={author._id} value={author._id}>{author.first_name + ' ' + author.family_name}</option>);
      const optionListGenre = genres.map(genre =>
       <option key={genre._id} value={genre._id}>{genre.name}</option>);

    return (
      <div className= "container-fluid"
        style={{
        paddingTop: '30px',
        paddingLeft: '50px',
        paddingRight: '50px'
      }}>

          <div className="col-sm-9">
            <h1 style={{
              fontWeight: '500',
            }}>
              <Link className="breadcrumbLink" to="/">Mi Biblioteca</Link> / Libros</h1>

          </div>


          <div style={{height: '3em'}}></div>



          <div className="col-sm-9 row">
            <div>
              <p className="col-sm-1 col-form-label">Título:</p>
            </div>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                value={this.state.newTitle}
                onChange={this.handleInputTitle}
                placeholder={'Obligatorio'}>
              </input>
            </div>

            <div className="col-sm-1"></div>

            <div>
              <p className="col-sm-1 col-form-label">Género:</p>
            </div>

            <div className="col-sm-3">
              <select
                className="form-control"
                id="sel1"
                value={this.state.newGenre}
                onChange={this.handleGenreSelection}
                >{optionListGenre}
              </select>
            </div>



          </div>

          <div style={{height: '1em'}}></div>

          <div className="col-sm-9 row">
            <div style={{paddingLeft: "0.5em"}}>
              <p className="col-sm-1 col-form-label" style={{textTransform: "uppercase"}}>isbn:</p>
            </div>
            <div className="col-sm-3" >
              <input
                type="text"
                className="form-control"
                value={this.state.newIsbn}
                onChange={this.handleInputIsbn}
                placeholder={'Obligatorio'}>
              </input>
            </div>
            <div className="col-sm-1"></div>
            <div style={{paddingLeft: "0.7em"}}>
              <p className="col-sm-1 col-form-label">Autor:</p>
            </div>
            <div className="col-sm-3">
                <select
                  className="form-control"
                  id="sel1"
                  value={this.state.newAuthor}
                  onChange={this.handleAuthorSelection}
                  >{optionListAuthor}
                </select>
            </div>

          </div>

          <div style={{height: '1em'}}></div>

          <div className="col-sm-9 row">
          <div >
            <p className="col-sm-1 col-form-label">Resumen:</p>
          </div>
          <div className="col-sm-9">
            <textarea
              style={{width: "103%", outline: "none"}}
              className="form-control"
              value={this.state.newSummary}
              onChange={this.handleInputSummary}
              placeholder={'Obligatorio'}>
            </textarea>
          </div>
          </div>

          <div style={{height: '2em'}}></div>

            <div className="col-sm-8" style={{display: "flex", justifyContent: "flex-end"}}>
              { createSaveButton }
            </div>

            <div style={{height: '4em'}}></div>

          <div className="col-sm-9">
            <table className="table" style={{}}>

              <thead >
                <tr style={{textIndent: '-10px'}} >
                  <th>Título</th>
                  <th style={{textTransform: 'uppercase'}}>isbn</th>
                  <th>Género</th>
                  <th>Autor</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody style={{textIndent: '-10px', fontSize: '16px'}}>
                { bookList }
              </tbody>

            </table>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres : state.genres,
    books : state.books,
    authors : state.authors
  };
};

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  getAuthors : () => dispatch(getAuthors()),
  getGenres : () => dispatch (getGenres()),
  createBook: (title, genre, isbn, author, summary) => dispatch(createBook( title, genre, isbn, author, summary)),
  deleteBook: (id) => dispatch(deleteBook(id)),
  updateBook: (id, title, genre, isbn, author, summary) => dispatch(deleteBook(id, title, genre, isbn, author, summary))
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
