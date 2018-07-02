import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';


import HomePage from '../containers/HomePage';
import GenresPage from '../containers/GenresPage';
import AuthorsPage from '../containers/AuthorsPage';
import BooksPage from '../containers/BooksPage';
import BooksReservePage from '../containers/BooksReservePage';
import BooksLoanPage from '../containers/BooksLoanPage';
import BooksGatherPage from '../containers/BooksGatherPage';
import BooksMaintenancePage from '../containers/BooksMaintenancePage';
import BooksOutOfTimePage from '../containers/BooksOutOfTimePage';

class AppStructure extends Component {

  render() {
    return (
      <Router>

        <div>

            <div style={{
              position: 'fixed',
              backgroundColor : '#E6E6E6',
              width: '300px',
              height: '100%',
              fontSize:'1.1em',
            }}>
                <ul style={{
                  listStyleType: 'none',
                  paddingTop: '0px',
                  paddingLeft: '0px',
                  fontWeight: '500',
                  lineHeight: '2.3em',
                  textIndent: '1em'
                }} className="nav navbar-nav">

                  <NavLink exact className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: 'black', textDecoration: 'none'}}
                    to="/" ><li style={{lineHeight: '3em', fontSize:'1.2em'}}>Mi Biblioteca</li>
                  </NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/generos" > <li style={{textIndent: '2em'}}>Géneros
                  </li></NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/autores" ><li style={{textIndent: '2em'}}>Autores</li>
                  </NavLink>

                  <NavLink exact className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/libros" ><li style={{textIndent: '2em'}}>Libros</li>
                  </NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/libros/reservar" ><li style={{textIndent: '4em'}}>Reservar libro</li>
                  </NavLink>

                  <br />

                  <li style={{lineHeight: '3em', fontSize: '1.2em', color: 'black'}}>Gestión de la Biblioteca</li>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/gestion/prestar" ><li style={{textIndent: '2em'}}>Prestar libro</li>
                  </NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/gestion/recoger" ><li style={{textIndent: '2em'}}>Recoger libro</li>
                  </NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/gestion/mantenimiento" ><li style={{textIndent: '2em'}}>Libros en mantenimiento</li>
                  </NavLink>

                  <NavLink className="sideBar"
                    activeStyle={{color: 'black', backgroundColor:'#bab8b8'}}
                    style={{color: '#707070', textDecoration: 'none'}}
                    to="/gestion/fuera-plazo" ><li style={{textIndent: '2em'}}>Libros fuera de plazo</li>
                  </NavLink>

                </ul>
            </div>

            <div className="container-fluid"
            style={{
              position: "absolute",
              left: '285px',
              paddingTop: '0px'
            }}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/generos" component={GenresPage} />
                  <Route path="/autores" component={AuthorsPage} />
                  <Route exact path="/libros" component={BooksPage} />
                  <Route path="/libros/reservar" component={BooksReservePage} />
                  <Route path="/gestion/prestar" component={BooksLoanPage} />
                  <Route path="/gestion/recoger" component={BooksGatherPage} />
                  <Route path="/gestion/mantenimiento" component={BooksMaintenancePage} />
                  <Route path="/gestion/fuera-plazo" component={BooksOutOfTimePage} />
                </Switch>
            </div>

        </div>

      </Router>
    );
  }

}

export default AppStructure;
