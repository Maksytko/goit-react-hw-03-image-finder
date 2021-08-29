import style from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button className={style.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

export default Button;
