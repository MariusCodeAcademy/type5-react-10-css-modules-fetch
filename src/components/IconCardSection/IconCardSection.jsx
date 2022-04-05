import IconCard from '../IconCard/IconCard';
import css from './IconCardSection.module.css';

// sudeti IconCardSection stilius is css failo
const IconCardSection = () => {
  return (
    <section className={css.section}>
      <div className='container'>
        <h2 className={css.title}>Here's all the stuff I do.</h2>
        <p className={css.para}>Odio turpis amet sed consequat eget posuere consequat.</p>
        <div className='icon-cards grid'>
          <IconCard />
          <IconCard />
          <IconCard />
        </div>
        <p className={css.para}>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
        <button className={css.btn}>See some of my recent work</button>
      </div>
    </section>
  );
};

export default IconCardSection;
