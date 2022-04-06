import css from './ImageCard.module.css';

const ImageCard = (props) => {
  return (
    <div className={css.card}>
      <img className={css.img} src={props.image} alt='tech' />
      <div className={css['card-info']}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ImageCard;
