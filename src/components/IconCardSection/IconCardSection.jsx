import IconCard from '../IconCard/IconCard';
import SectionHeading from '../UI/SectionHeading';
import css from './IconCardSection.module.css';
import Btn from '../UI/Btn';
import Container from './../UI/Container';
const data = {
  title: "Here's all the stuff I do.",
};

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
      <Container>
        <SectionHeading
          title={data.title}
          subtitle='Odio turpis amet sed consequat eget posuere consequat.'
        />
        <div className='icon-cards grid'>
          {iconCardsData.map((iObj) => (
            <IconCard key={iObj.id} {...iObj} />
          ))}
        </div>
        <p className={css.para}>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
        <Btn>See some of my recent work</Btn>
      </Container>
    </section>
  );
};

export default IconCardSection;
