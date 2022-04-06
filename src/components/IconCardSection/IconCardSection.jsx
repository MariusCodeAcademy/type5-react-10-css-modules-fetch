import IconCard from '../IconCard/IconCard';
import css from './IconCardSection.module.css';
const data = {
  title: "Here's all the stuff I do.",
};
// sudeti IconCardSection stilius is css failo

const iconCardsData = [
  {
    id: 1,
    icon: 'fa-comments',
    title: 'Consequat lorem',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    id: 2,
    icon: 'fa-camera',
    title: 'Lorem dolor tempus',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
  {
    id: 3,
    icon: 'fa-thumbs-o-up',
    title: 'Feugiat posuere',
    text: 'Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.',
  },
];

const IconCardSection = () => {
  return (
    <section className={css.section}>
      <div className='container'>
        <h2 className={css.title}>{data.title}</h2>
        <p className={css.para}>Odio turpis amet sed consequat eget posuere consequat.</p>
        <div className='icon-cards grid'>
          {iconCardsData.map((iObj) => (
            <IconCard key={iObj.id} {...iObj} />
          ))}
        </div>
        <p className={css.para}>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
        <button className={css.btn}>See some of my recent work</button>
      </div>
    </section>
  );
};

export default IconCardSection;
