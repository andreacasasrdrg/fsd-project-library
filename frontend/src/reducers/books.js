const books = (state = [], action) => {
    const newBookList=state.slice();
    const bookListAfterUpdate=state.slice();
    switch (action.type) {


        case 'GET_BOOKS_REQUEST':
            return state;
        case 'GET_BOOKS_SUCCESS':
            return action.books;
        case 'GET_BOOKS_ERROR':

            return state;


        case 'CREATE_BOOK_REQUEST':
            return state;
        case 'CREATE_BOOK_SUCCESS':
            return state.concat(action.book);
        case 'CREATE_BOOK_ERROR':
        default:
            return state;



        case 'DELETE_BOOK_REQUEST':
            return state;
        case 'DELETE_BOOK_SUCCESS':
        newBookList.map(name => {
                if (name._id === action.book) {
                    return newBookList.splice(newBookList.indexOf(name), 1);
                }

            })
            return newBookList;
        case 'DELETE_BOOK_ERROR':
            return state;


        case 'UPDATE_BOOK_REQUEST':
            return state;
        case 'UPDATE_BOOK_SUCCESS':
            bookListAfterUpdate.map(book=>{
                if(book._id===action.book._id){

                    book.title=action.book.title;
                    book.genre=action.book.genre;
                    book.isbn=action.book.isbn;
                    book.author=action.book.author;
                    book.summary=action.book.summary;


                }
            });
            return bookListAfterUpdate;

        case 'UPDATE_BOOK_ERROR':

            return state;

    }
};

export default books;
