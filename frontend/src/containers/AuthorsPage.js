import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

import {getAuthors, createAuthor, deleteAuthor, updateAuthor} from '../actions';

class AuthorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFirstName : '',
      newFamilyName : '',
      newBirthDate: '',
      newDeathDate: '',
      authorId: '',
      isEditing: false
    };

    this.handleInputFirstName = this.handleInputFirstName.bind(this);
    this.handleInputFamilyName = this.handleInputFamilyName.bind(this);
    this.handleInputBirthDate = this.handleInputBirthDate.bind(this);
    this.handleInputDeathDate = this.handleInputDeathDate.bind(this);

    this.handleCreateAuthor = this.handleCreateAuthor.bind(this);
    this.handleDeleteAuthor = this.handleDeleteAuthor.bind(this);
    this.handleUpdateAuthor = this.handleUpdateAuthor.bind(this);
    this.handleEditToggleOn = this.handleEditToggleOn.bind(this);
    this.handleEditToggleOff = this.handleEditToggleOff.bind(this);
  }

  componentWillMount() {
    this.props.getAuthors();
  }

  handleInputFirstName(event) {
    this.setState({
      newFirstName : event.target.value
    })
  }

  handleInputFamilyName(event) {
    this.setState({
      newFamilyName : event.target.value
    })
  }

  handleInputBirthDate(event) {
    this.setState({
      newBirthDate : event.target.value})
  }
  handleInputDeathDate(event) {
    this.setState({
      newDeathDate : event.target.value})
  }

  handleCreateAuthor() {
    this.setState({
      newFirstName : '',
      newFamilyName : '',
      newBirthDate : '',
      newDeathDate : ''
    })
    this.props.createAuthor(
      this.state.newFirstName, this.state.newFamilyName, this.state.newBirthDate, this.state.newDeathDate
    )
  }

  handleDeleteAuthor( authorId ) {
    this.props.deleteAuthor( authorId );
  }

  handleEditToggleOn( authorId ){
    const newFirstName = this.props.authors.filter( author => author._id == authorId )[0].first_name;
       this.setState({
           authorId,
           newFirstName,
           isEditing : true
       });
       const newFamilyName = this.props.authors.filter( author => author._id == authorId )[0].family_name;
       this.setState({
           authorId,
           newFamilyName,
           isEditing : true
       });
       const newBirthDate = this.props.authors.filter( author => author._id == authorId )[0].date_of_birth;
       this.setState({
           authorId,
           newBirthDate,
           isEditing : true
       });
       const newDeathDate = this.props.authors.filter( author => author._id == authorId )[0].date_of_death;
       this.setState({
           authorId,
           newDeathDate,
           isEditing : true
       });
   }

  handleEditToggleOff(){
    this.setState({
      isEditing : false,
      newFirstName : '',
      newFamilyName : '',
      newBirthDate : '',
      newDeathDate : ''
    })
  }

  handleUpdateAuthor() {
    this.setState({
      isEditing : false,
      newFirstName : '',
      newFamilyName : '',
      newBirthDate : '',
      newDeathDate : ''
    })
    this.props.updateAuthor(
      this.state.authorId, this.state.newFirstName, this.state.newFamilyName, this.state.newBirthDate, this.state.newDeathDate
     );
  }



  render() {

      const { authors } = (this.props);

      const createSaveFirstName =
        <input
          type = 'text'
          className = 'form-control'
          value = { this.state.newFirstName }
          onChange = { this.handleInputFirstName }
          placeholder = 'Obligatorio'
        ></input>

        const createSaveFamilyName =
          <input
            type = 'text'
            className = 'form-control'
            value = { this.state.newFamilyName }
            onChange = { this.handleInputFamilyName }
            placeholder = 'Obligatorio'
          ></input>

        const createSaveBirthDate =
          <input
            type = 'text'
            className = 'form-control'
            value = { this.state.newBirthDate }
            onChange = { this.handleInputBirthDate }
            placeholder = 'YYYY-MM-DD'
          ></input>

        const createSaveDeathDate =
          <input
            type = 'text'
            className = 'form-control'
            value = { this.state.newDeathDate }
            onChange = { this.handleInputDeathDate }
            placeholder = 'YYYY-MM-DD'
          ></input>


      const createSaveButton = this.state.isEditing ? (
        <div
          style ={{ marginLeft: '1.5em' }}
        >
            <button
              onClick = { this.handleUpdateAuthor }
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
            onClick = { this.handleCreateAuthor}
            type = 'submit'
            className = 'btn btn-success btn-round col-form-label'
            style = {{ marginLeft: '1.5em', width: '150px' }}
            >Crear
          </button>
      );

      const authorsList =
        authors.map( authors =>
          <tr key={ authors._id }>
            <td>{ authors.first_name }</td>
            <td>{ authors.family_name }</td>
            <td>{ (authors.date_of_birth) }</td>
            <td>{ (authors.date_of_death) }</td>
            <td >
              <button
                style = {{ marginRight: '5px' }}
                onClick = { this.handleEditToggleOn.bind(this, authors._id) }
                type = 'submit'
                className = 'btn btn-primary btn-round col-form-label'
                >Editar
                </button>
              <button onClick = { this.handleDeleteAuthor.bind(this, authors._id) }
                type = 'submit'
                className = 'btn btn-danger btn-round col-form-label'
                >Borrar
              </button>
            </td>
          </tr>
        );

    return (
      <div className = 'container-fluid'
        style={{
        paddingTop: '30px',
        paddingLeft: '50px',
        paddingRight: '50px'
      }}>

          <div className = 'col-sm-9'>
            <h1 style = {{ fontWeight : '500' }}>
              <Link
                className = 'breadcrumbLink'
                to= '/'
                >Mi Biblioteca
              </Link>
              &nbsp;/&nbsp;Autores
            </h1>
          </div>

      <div style = {{ height : '3em' }}></div>

      <div className = 'col-sm-10 row'>
        <div>
          <p className = 'col-sm-1 col-form-label'
            >Nombre:
          </p>
        </div>
        <div
          className = 'col-sm-3'
          style = {{marginRight : '1em'}}>
          { createSaveFirstName }
        </div>
        <div>
          <p className = 'col-sm-3 col-form-label'>
            Fecha&nbsp;nacimiento:
          </p>
        </div>
        <div className = 'col-sm-4'>
          { createSaveBirthDate }
        </div>
      </div>

      <div style = {{ height : '2em' }}></div>

      <div className = 'col-sm-10 row'>
        <div>
          <p
            className = 'col-sm-1 col-form-label'
            style = {{ textIndent : '-0.4em'}}
            >Apellidos:
          </p>
        </div>
        <div
          className = 'col-sm-3'
          style = {{marginRight : '1em'}}>
          { createSaveFamilyName }
        </div>
        <div>
          <p
            className = 'col-sm-3 col-form-label'
            style = {{ textIndent : '0.5em'}}
            >Fecha&nbsp;defunción:
          </p>
        </div>
        <div className = 'col-sm-4'>
          { createSaveDeathDate }
        </div>
      </div>

      <div style = {{ height : '2em' }}></div>

      <div>
        { createSaveButton }
      </div>

          <div style = {{ height : '4em' }}></div>

          <div className = 'col-sm-9'>
            <table className = 'table'>

              <thead>
                <tr style = {{textIndent : '-10px'}}>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Fecha nacimiento</th>
                  <th>Fecha defunción</th>
                  <th style = {{ textIndent : '3.4em' }}>Acciones</th>
                </tr>
              </thead>

              <tbody style = {{textIndent : '-10px', fontSize : '16px' }}>
                { authorsList }
              </tbody>

            </table>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors : state.authors
  };
};

const mapDispatchToProps = dispatch => ({
  getAuthors : () => dispatch(getAuthors()),
  createAuthor : (first_name, family_name, date_of_birth, date_of_death) => dispatch(createAuthor(first_name, family_name, date_of_birth, date_of_death)),
  deleteAuthor : (id) => dispatch(deleteAuthor(id)),
  updateAuthor : (id, first_name, family_name, date_of_birth, date_of_death) => dispatch(updateAuthor(id, first_name, family_name, date_of_birth, date_of_death))
});


export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
