const genres = (state = [], action) => {
  const newGenresList = state.slice();

    switch (action.type) {
      case 'GET_GENRES_REQUEST':
        return state;

      case 'GET_GENRES_SUCCESS':
        return action.genres;

      case 'CREATE_GENRE_REQUEST':
        return state;

      case 'CREATE_GENRE_SUCCESS':
        return state.concat(action.genre);

      case 'DELETE_GENRE_REQUEST':
        return state;

      case 'DELETE_GENRE_SUCCESS':
      newGenresList.map(name => {
              if (name._id === action.genre) {
                  return newGenresList.splice(newGenresList.indexOf(name), 1);
              }

          })
          return newGenresList;

      case 'UPDATE_GENRE_REQUEST':
        return state;

      case 'UPDATE_GENRE_SUCCESS':
        newGenresList.map( genre => {
           if( genre._id === action.genre._id){
                   genre.name = action.genre.name;
           }});

     return newGenresList;

      default:
        return state;
    }
  }


export default genres;
