import style from "./ImageGallery.module.css";
import propTypes from "prop-types";
import { Component } from "react";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

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

ImageGallery.propTypes = {
  onImgClick: propTypes.func,
  images: propTypes.arrayOf(propTypes.object),
};

export default ImageGallery;
