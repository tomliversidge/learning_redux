import React, {Component} from 'react';
import { connect } from 'react-redux';
import Commands from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item">
                    <span onClick={() => this.props.selectBook(book) }> {book.title}</span>
                    <span onClick={()=> this.props.deleteBook(book) }>x</span>
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    };
}

// Anything returned from this function (first arg) will end up as props
// on the BookList container
function mapDispatcherToProps(dispatcher){
    // whenever selectBook is called, result should be passed to all reducers
    // - flows through the dispatcher. The purpose it to have each reducer receive the result of
    // selectBook
    return bindActionCreators({
        selectBook: Commands.selectBook,
        deleteBook: Commands.deleteBook
    }, dispatcher);
}
// Promote BookList from a component to a container - it needs
// to know about this new dispatcher method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatcherToProps)(BookList);