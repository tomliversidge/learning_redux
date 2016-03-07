// state arg is not application state, only the state this
// reducer is responsible for, i.e. what it has previously created
// i.e. it is recursively sent back to itself whenever an action is received
export default function(state = null, action){
    console.log('active_book reducer called by ', action)
    // cannot return undefined from a reducer
    // never mutate state inside here
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
        case 'BOOK_DELETED':
            return action.book;
    }
    return state;
}