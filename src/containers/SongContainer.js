import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({
            songs: data.feed.entry
        }))
    }

    render() { 
        return(
            <SongList 
            songs={this.state.songs}
            />
        ); 
    }
}
 
export default SongContainer;