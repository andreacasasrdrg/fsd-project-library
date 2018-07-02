const authors = (state = [], action) => {
    const newAuthorList=state.slice();
    const authorListAfterUpdate=state.slice();
    switch (action.type) {


        case 'GET_AUTHORS_REQUEST':
            return state;
        case 'GET_AUTHORS_SUCCESS':
            return action.authors;
        case 'GET_AUTHORS_ERROR':

            return state;


        case 'CREATE_AUTHOR_REQUEST':
            return state;
        case 'CREATE_AUTHOR_SUCCESS':
            return state.concat(action.author);
        case 'CREATE_AUTHOR_ERROR':
        default:
            return state;



        case 'DELETE_AUTHOR_REQUEST':
            return state;
        case 'DELETE_AUTHOR_SUCCESS':
        newAuthorList.map(name => {
                if (name._id === action.author) {
                    return newAuthorList.splice(newAuthorList.indexOf(name), 1);
                }

            })
            return newAuthorList;
        case 'DELETE_AUTHOR_ERROR':
            return state;


        case 'UPDATE_AUTHOR_REQUEST':
            return state;
        case 'UPDATE_AUTHOR_SUCCESS':
            authorListAfterUpdate.map(author=>{
                if(author._id===action.author._id){

                    author.first_name=action.author.first_name;
                    author.family_name=action.author.family_name;
                    author.date_of_birth=action.author.date_of_birth;
                    author.date_of_death=action.author.date_of_death;


                }
            });
            return authorListAfterUpdate;

        case 'UPDATE_AUTHOR_ERROR':

            return state;

    }
};

export default authors;
