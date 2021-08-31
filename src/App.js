import "./App.css";
import { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import LoaderApp from "./components/Loader/Loader";
import imagesApi from "./services/images-api";

const BASE_URL = "https://pixabay.com/api";
const KEY = "22330011-89d1f89aeaa9d6f980eea326f";

class App extends Component {
  state = {
    name: "",
    images: [],
    loading: false,
    isVisibleModal: false,
    imgForModal: "",
  };

  page = 1;

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const newName = this.state.name;

    if (newName !== prevName) {
      this.setState({ loading: true });
      this.page = 1;
      imagesApi(BASE_URL, newName, this.page, KEY)
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

    imagesApi(BASE_URL, this.state.name, this.page, KEY)
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
    this.setState({ isVisibleModal: !this.state.isVisibleModal });
  };

  onImgClick = (event) => {
    const image = this.state.images.find(
      (image) => image.webformatURL === event.target.getAttribute("src")
    );

    this.setState({
      imgForModal: image.largeImageURL,
      isVisibleModal: true,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} onImgClick={this.onImgClick} />
        {this.state.isVisibleModal && (
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
