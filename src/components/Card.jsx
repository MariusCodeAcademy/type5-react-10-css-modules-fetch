import './card.css';

const Card = () => {
  const titleStyle = {
    textTransform: 'uppercase',
    fontSize: '3rem',
  };

  return (
    <div className='card border'>
      <h2 style={titleStyle} className='title'>
        Card title
      </h2>
      <p className='card__text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, modi.
      </p>
      <button className='btn'>Click me</button>
    </div>
  );
};

export default Card;
