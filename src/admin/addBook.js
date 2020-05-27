import React from 'react';
import AdminBookForm from './book-form';
import {withRouter,Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { createBookAction } from '../+state/actions';

class AddBook extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            cost: '',
            currencyIn: '',
            description: '',
            imageUrl: ''
        }
    }
    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    addBook = () => {
        const book = {
            name: this.state.name,
            author: [this.state.author],
            cost: this.state.cost,
            currencyIn: this.state.currencyIn,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        }
        this.props.toAddBook(book);
      
    }
    render() {
        return (
    <AdminBookForm onChangeText={this.onChangeText} book={this.state}>
        <button type="button" className="btn btn-primary mt-5" onClick={this.addBook}>AddBook</button>
        <Link className="btn btn-primary ml-2" to="/admin/list">Dashboard</Link>
    </AdminBookForm>
    );
    }
}
const mapStateToProps = state => {
    return {
        addedBooks: state.addedBooks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        toAddBook: (book) => dispatch(createBookAction(book))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddBook));