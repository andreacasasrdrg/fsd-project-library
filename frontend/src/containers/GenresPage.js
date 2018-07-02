import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getGenres, createGenre, deleteGenre, updateGenre} from '../actions';

class GenresPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGenre : '',
      genreId : '',
      isEditing : false
  };

    this.handleInput = this.handleInput.bind(this);
    this.handleCreateGenre = this.handleCreateGenre.bind(this);
    this.handleDeleteGenre = this.handleDeleteGenre.bind(this);
    this.handleUpdateGenre = this.handleUpdateGenre.bind(this);
    this.handleEditToggleOn = this.handleEditToggleOn.bind(this);
    this.handleEditToggleOff = this.handleEditToggleOff.bind(this);
  }

  componentWillMount() {
    this.props.getGenres()
  }


  handleInput(event) {
    this.setState({
      newGenre : event.target.value
    })
  }

  handleCreateGenre() {
    this.setState({
      newGenre : ''
    })
    this.props.createGenre(this.state.newGenre)
  }

  handleDeleteGenre( genreId ) {
    this.setState({
      isEditing: false,
      newGenre : ''
    })
    this.props.deleteGenre( genreId )
  }

  handleEditToggleOn( genreId ){
    const newGenre = this.props.genres.filter( genre => genre._id == genreId )[0].name;
        this.setState({
            genreId,
            newGenre,
            isEditing : true
        }) }

  handleEditToggleOff(){
    this.setState({
      isEditing : false,
      newGenre : ''
    })
  }

  handleUpdateGenre() {
    this.setState({
      isEditing : false,
      newGenre : ''
    })
    this.props.updateGenre( this.state.genreId, this.state.newGenre );
}


  render() {

      const { genres } = this.props;

      const createSaveInput =
        <input
          style={{marginLeft: '0.95em'}}
          type = 'text'
          className = 'form-control col-sm-3'
          value = { this.state.newGenre }
          onChange = { this.handleInput }
          placeholder = 'Aventuras'
        ></input>

      const createSaveButton = this.state.isEditing ? (
        <div
          style={{marginLeft: '1.5em'}}
        >
            <button
              onClick = { this.handleUpdateGenre }
              type = 'submit'
              className = 'btn btn-success btn-round col-form-label'
              style = {{width: '150px'}}
              >Guardar
            </button>
            <button
              onClick = { this.handleEditToggleOff }
              type = 'submit'
              className = 'btn btn-danger btn-round col-form-label'
              style = {{ marginLeft: '1.5em', width: '150px' }}
              >Cancelar
            </button>
        </div>
      ) : (
        <button
            onClick = { this.handleCreateGenre }
            type = 'submit'
            className = 'btn btn-success btn-round col-form-label'
            style = {{ marginLeft: '1.5em', width: '150px' }}
            >Crear
          </button>
      );

      const genresList =
        genres.map( genres =>
          <tr key = { genres._id } >
            <td>{ genres.name }</td>
            <td>
              <button
                style = {{ marginRight: '5px' }}
                onClick = { this.handleEditToggleOn.bind(this, genres._id) }
                type = 'submit'
                className = 'btn btn-primary btn-round col-form-label'
                >Editar
                </button>
              <button onClick = { this.handleDeleteGenre.bind(this, genres._id) }
                type = 'submit'
                className = 'btn btn-danger btn-round col-form-label'
                >Borrar
              </button>
            </td>
          </tr>
        );

    return (
      <div
        className = 'container-fluid'
        style = {{
          paddingTop : '30px',
          paddingLeft : '50px',
          paddingRight : '50px'
        }}>

          <div className = 'col-sm-9'>
            <h1 style = {{ fontWeight : '500'}}>
              <Link
                className = 'breadcrumbLink'
                to = '/'
                >Mi Biblioteca
              </Link>
              &nbsp;/&nbsp;Géneros
            </h1>
          </div>

          <div style = {{ height : '3em' }}></div>

          <div className = 'col-sm-10 row'>
            <div>
              <p className = 'col-sm-1 col-form-label'
                >Nombre:
              </p>
            </div>
              { createSaveInput }
              { createSaveButton }
          </div>

          <div style = {{ height: '4em' }}></div>

          <div className = 'col-sm-9'>
            <table className = 'table'>
              <thead>
                <tr style={{ textIndent : '-10px' }}>
                  <th>Nombre</th>
                  <th style = {{ textIndent : '3.4em' }}>Acciones</th>
                </tr>
              </thead>
              <tbody style = {{ textIndent : '-10px', fontSize : '16px' }}>
                { genresList }
              </tbody>
            </table>
          </div>

        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres : state.genres
  };
};

const mapDispatchToProps = dispatch => ({
  getGenres : () => dispatch (getGenres()),
  createGenre : (name) => dispatch (createGenre(name)),
  deleteGenre : (id) => dispatch (deleteGenre(id)),
  updateGenre : (id, name) => dispatch (updateGenre(id, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);
