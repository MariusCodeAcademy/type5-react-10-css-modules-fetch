import IconCard from '../IconCard/IconCard';
import SectionHeading from '../UI/SectionHeading';
import css from './IconCardSection.module.css';
import Btn from '../UI/Btn';
import Container from './../UI/Container';
import styled from 'styled-components';

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

const Section = styled.section`
  background-color: #d2d2d2;
  padding: 7% 0;
  text-align: center;
  box-shadow: 5px 5px 15px #7f7f7f;
`;

const Para = styled.p`
  font-weight: lighter;
  text-align: center;
  margin-top: 40px;
`;

const IconCardSection = () => {
  return (
    <Section>
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
        <Para>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</Para>
        <Btn>See some of my recent work</Btn>
      </Container>
    </Section>
  );
};

export default IconCardSection;
