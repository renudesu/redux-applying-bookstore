import React from 'react';
import AdminBookForm from './book-form';

import { connect } from 'react-redux';
import { getBookListAction, updateBookAction, deleteBookAction } from '../+state/actions';

class EditBook extends React.Component {
    constructor() {
        super();
        this.state = {
            isBookAvailable: false,
            selectedBook: {},
        }
    }
    componentDidMount() {
        this.props.list();
    }
    selectBook = (book) => {
        console.log(book);
        this.setState({ isBookAvailable: true, selectedBook: book })
    }
    onChangeText = (event) => {
        this.setState({
            selectedBook: {
                ...this.state.selectedBook,
                [event.target.name]: event.target.value
            }
        });
    }
    back = () => {
        this.setState({ isBookAvailable: false, selectedBook: {} })
    }
    edit = () => {
        const book = {
            _id: this.state.selectedBook._id,
            name: this.state.selectedBook.name,
            author: this.state.selectedBook.author.slice(','),
            cost: this.state.selectedBook.cost,
            currencyIn: this.state.selectedBook.currencyIn,
            description: this.state.selectedBook.description,
            imageUrl: this.state.selectedBook.imageUrl
        }
        this.props.toEditBook(book);
        this.back();
    }
    delete = () => {
        this.props.deltetBook(this.state.selectedBook._id);
        this.back();
    }
    render() {
        const adminList = this.props.adminBooksList && this.props.adminBooksList.map((value, index) => {
            return (
                <li key={index} onClick={() => this.selectBook(value)}> {value.name}</li>
            );
        })
        return (
            <div >
                <div className="col-md-3">
                    {adminList}
                </div>
                <AdminBookForm onChangeText={this.onChangeText} book={this.state.selectedBook}>
                    <div>
                        <button type="button" className="btn btn-primary mt-5 ml-2 mr-2" onClick={this.edit}>EditBook</button>
                        <button type="button" className="btn btn-danger mt-5 mr-2" onClick={this.delete}>Delete</button>
                        <button type="button" className="btn btn-primary mt-5 " onClick={this.back}>Back</button>
                    </div>
                </AdminBookForm>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        adminBooksList: state.books
    };
}
const mapDispatchToProps = dispatch => {
    return {
        list: () => dispatch(getBookListAction()),
        toEditBook: (book) => dispatch(updateBookAction(book)),
        deltetBook: (id) => dispatch(deleteBookAction(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(EditBook);