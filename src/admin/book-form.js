import React from 'react';

export default class AdminBookForm extends React.Component {
    render() {
        return (
            <div className="col-md-6 mt-5">
                <label htmlFor="name">Book name</label>
                <input type="text" name="name" onChange={this.onChangeText} value={this.state.selectedBook.name} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" onChange={this.onChangeText} value={this.state.selectedBook.author} />
                <label htmlFor="author">Cost</label>
                <input type="text" name="cost" onChange={this.onChangeText} value={this.state.selectedBook.cost} />
                <label htmlFor="cost">CurrencyIn</label>
                <input type="text" name="currencyIn" onChange={this.onChangeText} value={this.state.selectedBook.currencyIn} />
                <label htmlFor="currencyIn">Description</label>
                <input type="text" name="description" onChange={this.onChangeText} value={this.state.selectedBook.description} />
                <label htmlFor="imageUrl">ImageUrl</label>
                <input type="text" name="imageUrl" onChange={this.onChangeText} value={this.state.selectedBook.imageUrl} />

                <div>
                   {this.props.children}
                </div>
            </div>
        );
    }
}