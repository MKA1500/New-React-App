import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBHpL3V2WB68OtKEznnAV0jBkXCbhJ3U44';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>  
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
