import React from 'react';

import { connect } from 'react-redux';
import { getBookListAction } from '../+state/actions';

class AdminBookList extends React.Component {
    componentDidMount() {
        this.props.list();
    }
    render() {
        const adminList = this.props.adminBooksList && this.props.adminBooksList.map((value, index) => {
            return (
                <li key={index}>{value.name}</li>
            );
        })
        return (
            <div className="col-md-6 mt-5">{adminList}</div>
        );
    }
}
const mapStateToProps = state => {
    return {
        adminBooksList: state.books
    };
}
const mapDispatchToProps = dispatch => {
    return {
        list: () => dispatch(getBookListAction())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminBookList);