import style from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ imageUrl, onClick }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={imageUrl}
        alt=""
        className={style.ImageGalleryItemImage}
        onClick={onClick}
      />
    </li>
  );
}

export default ImageGalleryItem;
