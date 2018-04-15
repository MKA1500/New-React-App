import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import 'bootstrap/dist/css/bootstrap.css';
import './Styles.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBHpL3V2WB68OtKEznnAV0jBkXCbhJ3U44';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Poznan City');
  }

  videoSearch (term) {
    YTSearch({
      key: API_KEY,
      term: 'Poznan City'
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div className="container">
        <SearchBar
          term={this.state.term}
          onSearchTerm={term => this.videoSearch(term)}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
