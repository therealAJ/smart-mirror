import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';

const API_KEY = 'AIzaSyDIKh8MYi9a5d8v8GLQkBcvh7Q4_lfbrfA';

class YoutubeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { videos : [] };
    }

    videoSearch(term) {
         YTSearch({key: API_KEY, term: term}, videos =>
            this.setState({ videos })
        );
    }
    
    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default YoutubeContainer;