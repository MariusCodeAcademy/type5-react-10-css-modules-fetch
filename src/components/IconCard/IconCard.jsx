import css from './IconCard.module.css';
import Icon from '../UI/Icon';

const IconCard = (props) => {
  return (
    <div className={css.card}>
      <Icon className={css.icon} icon={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default IconCard;
