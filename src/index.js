import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBHpL3V2WB68OtKEznnAV0jBkXCbhJ3U44';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({
      key: API_KEY,
      term: 'Poznań'
    }, (videos) => {
      this.setState({ videos });
    // i.e. this.setState({ videos: videos }); in ES6
      console.log(this.state);
    });
  }

  render(){
    return (
      <div className="container">
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
