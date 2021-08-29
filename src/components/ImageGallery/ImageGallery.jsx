import style from "./ImageGallery.module.css";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";

class ImageGallery extends Component {
  componentDidUpdate(prevProps) {
    const currentProps = prevProps.images;
    const nextProps = this.props.images;

    if (currentProps !== nextProps) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <ul className={style.ImageGallery}>
        {this.props.images.map((image) => {
          return (
            <ImageGalleryItem
              imageUrl={image.webformatURL}
              key={image.id}
              onClick={this.props.onImgClick}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
