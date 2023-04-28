import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const {onChange} = this.props; 
    return (
      <center>
        <input className="search-box" type="search" placeholder="find recipe" onChange={onChange} />
      </center>
    );
  }
}

export default SearchBox;
