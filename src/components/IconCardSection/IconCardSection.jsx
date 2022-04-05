import IconCard from '../IconCard/IconCard';
// sudeti IconCardSection stilius is css failo
const IconCardSection = () => {
  return (
    <section>
      <div className='container'>
        <h2>Here's all the stuff I do.</h2>
        <p>Odio turpis amet sed consequat eget posuere consequat.</p>
        <div className='icon-cards'>
          icon cards
          <IconCard />
        </div>
        <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
        <button>See some of my recent work</button>
      </div>
    </section>
  );
};

export default IconCardSection;
