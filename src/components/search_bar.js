import React, {Component} from 'react';
// ..., {Component} is like Component = React.Component...

class Searchbar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value) }/>;
  }
  /*
  onInputChange(event) {
    console.log(event.target.value);
  }
  */
}

export default Searchbar;
