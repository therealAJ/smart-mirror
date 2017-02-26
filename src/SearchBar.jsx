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
            <div className='search-bar container'>
                <input className='search-input white-text' placeholder='Youtube Search' onChange={event => this.onInputChange(event.target.value)} />                
            </div>
        );
    }
}

export default SearchBar;