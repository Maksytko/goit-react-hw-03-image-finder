import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import LoaderApp from "./components/Loader/Loader";

const BASE_URL = "https://pixabay.com/api";
const KEY = "22330011-89d1f89aeaa9d6f980eea326f";

class App extends Component {
  state = {
    name: "",
    images: [],
    loading: false,
    modal: false,
    imgForModal: "",
  };

  page = 1;

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const newName = this.state.name;

    if (newName !== prevName) {
      this.setState({ loading: true });
      this.page = 1;
      fetch(
        `${BASE_URL}/?q=${newName}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((result) => {
          this.setState({ images: result.hits });
        })
        .finally(this.setState({ loading: false }));
    }
  }

  onClick = () => {
    this.setState({ loading: true });
    this.page = this.page + 1;

    fetch(
      `${BASE_URL}/?q=${this.state.name}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState((prevState) => {
          return { images: [...prevState.images, ...result.hits] };
        });
      })
      .finally(this.setState({ loading: false }));
  };

  onSubmit = (text) => {
    this.setState({ name: text.trim() });
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  onImgClick = (event) => {
    const image = this.state.images.find(
      (image) => image.webformatURL === event.target.getAttribute("src")
    );

    this.setState({
      imgForModal: image.largeImageURL,
      modal: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} onImgClick={this.onImgClick} />
        {this.state.modal && (
          <Modal
            image={this.state.imgForModal}
            toggleModal={this.toggleModal}
          />
        )}
        {this.state.loading ? (
          <LoaderApp />
        ) : (
          <Button onClick={this.onClick} images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
