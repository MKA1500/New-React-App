import React, {Component} from 'react';
// ..., {Component} is like Component = React.Component...

class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {term: '' };
  }
  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value}) }/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    );
  }
}

export default Searchbar;
