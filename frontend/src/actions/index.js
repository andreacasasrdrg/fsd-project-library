import axios from 'axios';

//MOCKUP

    //ACTION BOOKS
  export const getBooks = () => {
      return dispatch => {
          dispatch(getBooksRequest());
          axios.get(`http://localhost:3001/catalog/books`)
          .then(function (response) {
            console.log(response);
          dispatch(getBooksSuccess(response.data.bookList));
          })
        .catch(function (error) {
           dispatch(getBooksError(error));
         });
      };
  }

        function getBooksRequest() {
            return {
                type: 'GET_BOOKS_REQUEST',
                isFetching: true
            };
        }

        function getBooksSuccess (books) {
            return {
                type: 'GET_BOOKS_SUCCESS',
                isFetching: false,
                error: false,
                books
            };
        }
        function getBooksError(errorMessage) {
            return {
                type: 'GET_BOOKS_ERROR',
                isFetching: false,
                error: true,
                errorMessage
            };
        }

export const createBook = (title, isbn, genre, author, summary) => {
      return dispatch => {
        dispatch(createBookRequest());
          axios.post(`http://localhost:3001/catalog/books/create`, {title, isbn, genre, author, summary})
          .then(function (response) {
           console.log(response);
           dispatch(createBookSuccess(response.data));
            })
           .catch(function (error) {
             dispatch(createBookError(error));
              });
            };
        }

              function createBookRequest() {
                  return {
                      type: 'CREATE_BOOK_REQUEST',
                      isFetching: true
                  };
              }

              function createBookSuccess (book) {
                  return {
                      type: 'CREATE_BOOK_SUCCESS',
                      isFetching: false,
                      error: false,
                      book
                  };
              }

              function createBookError(errorMessage) {
                  return {
                      type: 'CREATE_BOOK_ERROR',
                      isFetching: false,
                      error: true,
                      errorMessage
                  };
              }



          export const deleteBook = (id) => {
              return dispatch => {
                  dispatch(deleteBookRequest());


                axios.delete(`http://localhost:3001/catalog/book/${id}/delete`)
                 .then(function (response) {
                   console.log(response);
                    dispatch(deleteBookSuccess(response.data));
                })
                 .catch(function (error) {
                   dispatch(deleteBookError(error));
                });
              };
          }

                    function deleteBookRequest() {
                        return {
                            type: 'DELETE_BOOK_REQUEST',
                            isFetching: true
                        };
                    }

                    function deleteBookSuccess (book) {
                        return {
                            type: 'DELETE_BOOK_SUCCESS',
                            isFetching: false,
                            error: false,
                            book
                        };
                    }

                    function deleteBookError(errorMessage) {
                        return {
                            type: 'DELETE_BOOK_ERROR',
                            isFetching: false,
                            error: true,
                            errorMessage
                        };
                    }



        export const updateBook = (id, title, isbn, genre, author, summary) => {
          console.log(genre);
            return dispatch => {
                dispatch(updateBookRequest());


              axios.put(`http://localhost:3001/catalog/book/${id}/update`, {id, title, isbn, genre, author, summary})
               .then(function (response) {
                  dispatch(updateBookSuccess(response.data));
              })
               .catch(function (error) {
                 dispatch(updateBookError(error));
              });
            };
        }




              function updateBookRequest() {
                  return {
                      type: 'UPDATE_BOOK_REQUEST',
                      isFetching: true
                  };
              }

              function updateBookSuccess (book) {
                  return {

                      type: 'UPDATE_BOOK_SUCCESS',
                      isFetching: false,
                      error: false,
                      book
                  };
              }

              function updateBookError(errorMessage) {
                  return {
                      type: 'UPDATE_BOOK_ERROR',
                      isFetching: false,
                      error: true,
                      errorMessage
                  };
              }




//ACTIONS GENRES
export const getGenres = () => {
    return dispatch => {
        dispatch(getGenresRequest());


      axios.get(`http://localhost:3001/catalog/genres`)
       .then(function (response) {
          dispatch(getGenresSuccess(response.data.genresList));
      })
       .catch(function (error) {
         dispatch(getGenresError(error));
      });
    };
}

      function getGenresRequest() {
          return {
              type: 'GET_GENRES_REQUEST',
              isFetching: true
          };
      }

      function getGenresSuccess (genres) {
          return {
              type: 'GET_GENRES_SUCCESS',
              isFetching: false,
              error: false,
              genres
          };
      }

      function getGenresError(errorMessage) {
          return {
              type: 'GET_GENRES_ERROR',
              isFetching: false,
              error: true,
              errorMessage
          };
      }



export const createGenre = (name) => {
    return dispatch => {
        dispatch(createGenreRequest());


      axios.post(`http://localhost:3001/catalog/genre/create`, {name})
       .then(function (response) {
         console.log(response);

          dispatch(createGenreSuccess(response.data));
      })
       .catch(function (error) {
         dispatch(createGenreError(error));
      });
    };
}

      function createGenreRequest() {
          return {
              type: 'CREATE_GENRE_REQUEST',
              isFetching: true
          };
      }

      function createGenreSuccess (genre) {
          return {
              type: 'CREATE_GENRE_SUCCESS',
              isFetching: false,
              error: false,
              genre
          };
      }

      function createGenreError(errorMessage) {
          return {
              type: 'CREATE_GENRE_ERROR',
              isFetching: false,
              error: true,
              errorMessage
          };
      }



  export const deleteGenre = (id) => {
      return dispatch => {
          dispatch(deleteGenreRequest());


        axios.delete(`http://localhost:3001/catalog/genre/${id}/delete`)
         .then(function (response) {
           console.log(response);
            dispatch(deleteGenreSuccess(response.data));
        })
         .catch(function (error) {
           dispatch(deleteGenreError(error));
        });
      };
  }

            function deleteGenreRequest() {
                return {
                    type: 'DELETE_GENRE_REQUEST',
                    isFetching: true
                };
            }

            function deleteGenreSuccess (genre) {
                return {
                    type: 'DELETE_GENRE_SUCCESS',
                    isFetching: false,
                    error: false,
                    genre
                };
            }

            function deleteGenreError(errorMessage) {
                return {
                    type: 'DELETE_GENRE_ERROR',
                    isFetching: false,
                    error: true,
                    errorMessage
                };
            }



export const updateGenre = (id, name) => {
    return dispatch => {
        dispatch(updateGenreRequest());


      axios.put(`http://localhost:3001/catalog/genre/${id}/update`, {name})
       .then(function (response) {
          dispatch(updateGenreSuccess(response.data));
      })
       .catch(function (error) {
         dispatch(updateGenreError(error));
      });
    };
}


      function updateGenreRequest() {
          return {
              type: 'UPDATE_GENRE_REQUEST',
              isFetching: true
          };
      }

      function updateGenreSuccess (genre, name) {
          return {

              type: 'UPDATE_GENRE_SUCCESS',
              isFetching: false,
              error: false,
              genre, name
          };
      }

      function updateGenreError(errorMessage) {
          return {
              type: 'UPDATE_GENRE_ERROR',
              isFetching: false,
              error: true,
              errorMessage
          };
      }


//ACTION AUTHORS
export const getAuthors = () => {
    return dispatch => {
        dispatch(getAuthorsRequest());

        axios.get(`http://localhost:3001/catalog/authors`)
        .then(function (response) {
          dispatch(getAuthorsSuccess(response.data.authorList));
        })
        .catch(function (error) {
          dispatch(getAuthorsError(error));
        });
    };
}

function getAuthorsRequest() {
    return {
        type: 'GET_AUTHORS_REQUEST',
        isFetching: true
    };
}

function getAuthorsSuccess (authors) {
    return {
        type: 'GET_AUTHORS_SUCCESS',
        isFetching: false,
        error: false,
        authors
    };
}

function getAuthorsError(errorMessage) {
    return {
        type: 'GET_AUTHORS_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}

export const createAuthor = (first_name,family_name,date_of_birth,date_of_death) =>{
    return dispatch => {
        dispatch(createAuthorRequest());

        axios.post(`http://localhost:3001/catalog/author/create`,{first_name,family_name,date_of_birth,date_of_death})
            .then(function (response) {

                dispatch(createAuthorSuccess(response.data))
            })
            .catch(function (error) {
                dispatch(createAuthorError(error));
            });
    }};

    function createAuthorRequest() {
        return {
            type: 'CREATE_AUTHOR_REQUEST',
            isFetching: true
        };
    }

    function createAuthorSuccess (author) {
        return {
            type: 'CREATE_AUTHOR_SUCCESS',
            isFetching: false,
            error: false,
            author
        };
    }

    function createAuthorError(errorMessage) {
        return {
            type: 'CREATE_AUTHOR_ERROR',
            isFetching: false,
            error: true,
            errorMessage
        };
    }


  export const deleteAuthor = (id) => {
      return dispatch => {
          dispatch(deleteAuthorRequest());


        axios.delete(`http://localhost:3001/catalog/author/${id}/delete`)
         .then(function (response) {
           console.log(response);
            dispatch(deleteAuthorSuccess(response.data));
        })
         .catch(function (error) {
           dispatch(deleteAuthorError(error));
        });
      };
  }

            function deleteAuthorRequest() {
                return {
                    type: 'DELETE_AUTHOR_REQUEST',
                    isFetching: true
                };
            }

            function deleteAuthorSuccess (author) {
                return {
                    type: 'DELETE_AUTHOR_SUCCESS',
                    isFetching: false,
                    error: false,
                    author
                };
            }

            function deleteAuthorError(errorMessage) {
                return {
                    type: 'DELETE_AUTHOR_ERROR',
                    isFetching: false,
                    error: true,
                    errorMessage
                };
            }



export const updateAuthor = (id,first_name,family_name,date_of_birth,date_of_death) => {
    return dispatch => {
        dispatch(updateAuthorRequest());


        axios.put(`http://localhost:3001/catalog/author/${id}/update`,{first_name,family_name,date_of_birth,date_of_death})
            .then(function (response) {
                console.log(response);
                dispatch(updateAuthorSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(updateAuthorError(error));
            });
    };
};


function updateAuthorRequest() {
    return {
        type: 'UPDATE_AUTHOR_REQUEST',
        isFetching: true
    };
}

function updateAuthorSuccess (author,first_name,family_name,date_of_birth,date_of_death) {
  console.log(updateAuthorSuccess);
    return {

        type: 'UPDATE_AUTHOR_SUCCESS',
        isFetching: false,
        error: false,
        author,
        first_name,family_name,date_of_birth,date_of_death
    };
}

function updateAuthorError(errorMessage) {
  console.log(updateAuthorSuccess);
    return {
        type: 'UPDATE_AUTHOR_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}


//ACTION BOOKSINSTANCES
export const getBookInstances = () => {
    return dispatch => {
        dispatch(getBookInstancesRequest());

        const bookInstances = {
          "bookinstanceList":[
            {
                "status": "Loaned",
                "_id": "5b115f92c1a85015cc2f9e2f",
                "book": {
                    "genre": [],
                    "_id": "5b115f92c1a85015cc2f9e28",
                    "title": "The Name of The Wind",
                    "summary": "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
                    "author": "5b115f91c1a85015cc2f9e24",
                    "isbn": "9781473211896",
                    "__v": 0
            }
          }
        ]};
        //axios.get(`http://localhost:3001/catalog/bookinstances`)
      //  .then(function (response) {
          dispatch(getBookInstancesSuccess(bookInstances.bookinstanceList));
      //  })
      //  .catch(function (error) {
      //    dispatch(getBookInstancesError(error));
      //  });
    };
}

function getBookInstancesRequest() {
    return {
        type: 'GET_BOOKINSTANCES_REQUEST',
        isFetching: true
    };
}

function getBookInstancesSuccess (bookInstances) {
    return {
        type: 'GET_BOOKINSTANCES_SUCCESS',
        isFetching: false,
        error: false,
        bookInstances
    };
}

function getBookInstancesError(errorMessage) {
    return {
        type: 'GET_BOOKINSTANCES_ERROR',
        isFetching: false,
        error: true,
        errorMessage
    };
}
