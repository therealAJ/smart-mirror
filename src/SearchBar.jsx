import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
    
    render() {
        return (
            <div className='search-bar'>
                <input onChange={event => this.onInputChange(event.target.value)} />                
            </div>
        );
    }
}

export default SearchBar;