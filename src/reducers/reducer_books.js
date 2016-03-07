
const defaultState = [
    { title: '123', pages: 89},
    { title: 'hello ruby', pages: 23},
    { title: 'hello tom', pages:324}
];

export default function(state = defaultState, action){

    console.log('book list reducer called by ', action)
    // cannot return undefined from a reducer
    // never mutate state inside here
    switch(action.type){
        case 'BOOK_DELETED':
        {
            if (action.book.title == '123')
            {
                console.log('123')
            }
        }

    }
    return state;

}
