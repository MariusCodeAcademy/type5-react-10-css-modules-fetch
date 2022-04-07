import Btn from '../UI/Btn';
import SectionHeading from '../UI/SectionHeading';
import css from './ImageCardSection.module.css';
import ImageCard from './../ImageCard/ImageCard';
import Container from '../UI/Container';

const imageCardData = [
  {
    id: 1,
    image: 'https://placeimg.com/640/480/nature',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 2,
    image: 'https://placeimg.com/640/480/arch',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 3,
    image: 'https://placeimg.com/640/480/people/grayscale',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 4,
    image: 'https://placeimg.com/640/480/tech',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 5,
    image: 'https://placeimg.com/640/480/nature/grayscale',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 6,
    image: 'https://placeimg.com/640/480/arch/sepia',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 7,
    image: 'https://placeimg.com/640/480/arch',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 8,
    image: 'https://placeimg.com/640/480/nature',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
  {
    id: 9,
    image: 'https://placeimg.com/640/480/tech/sepia',
    title: 'Lorem, ipsum.',
    text: 'Lorem ipsum dolor sit.',
  },
];

const ImageCardSection = (props) => {
  console.log('props.items ===', props.items);
  // priklausomai ar gaunam props.items norim paduoti el generavimui
  // visa imageCardData arba tiek kiek yra nurodyta items
  // visas = imageCardData
  // pirmi trys = imageCardData.slice(0, 3)
  // pirmi iki kiek nurodyta = imageCardData.slice(0, props.items)
  // salyga ? true : false
  const filteredCards =
    props.items > 0 ? imageCardData.slice(0, props.items) : imageCardData;

  return (
    <section id='imageSection' className={css.section}>
      <Container>
        <SectionHeading
          title='Here’s some stuff I made recently.'
          subtitle='Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.'
        />
        <div className='grid'>
          {filteredCards.map((iObj) => (
            <ImageCard key={iObj.id} {...iObj} />
          ))}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed.</p>
        <Btn>Get in touch with me</Btn>
      </Container>
    </section>
  );
};

export default ImageCardSection;
