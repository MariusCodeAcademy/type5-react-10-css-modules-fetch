import css from './IconCard.module.css';
import Icon from '../UI/Icon';

const IconCard = () => {
  return (
    <div className={css.card}>
      <Icon className={css.icon} icon='fa-comments' />
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, beatae.</p>
    </div>
  );
};

export default IconCard;
