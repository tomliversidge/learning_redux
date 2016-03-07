//export function selectBook(book){
//    // selectBook is an ActionCreator, it needs to return an action,
//    // an object with a type property
//    return {
//        type: 'BOOK_SELECTED',
//        payload: book
//    };
//}

const Commands = {
    selectBook: function(book) { return { type: 'BOOK_SELECTED', payload: book}},
    deleteBook: function(book) { return { type: 'BOOK_DELETED', book: book}}
};
export default Commands;