import { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    text: "",
  };

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className="SearchForm" onSubmit={this.handleFormSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="text"
            value={this.state.text}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
