import React, {Component} from 'react';
// ..., {Component} is like Component = React.Component...

class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {term: 'Poznan City' };
  }

  render() {
    // only the state controles the input value now:
    return (
      <div className="my-2">
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          className="form-control"/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    );
  }
}

export default Searchbar;
