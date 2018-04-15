import React, {Component} from 'react';
// ..., {Component} is like Component = React.Component...

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="row">
        <div className="my-2 col-xl-8">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            className="form-control"/>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
