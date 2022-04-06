import Btn from '../Btn';
import SectionHeading from '../UI/SectionHeading';
import css from './ImageCardSection.module.css';

const ImageCardSection = () => {
  return (
    <section className={css.section}>
      <div className='container'>
        <SectionHeading
          title='Here’s some stuff I made recently.'
          subtitle='Proin odio consequat sapien vestibulum consequat lorem dolore feugiat.'
        />
        <div className='grid'>image card</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, sed.</p>
        <Btn>Get in touch with me</Btn>
      </div>
    </section>
  );
};

export default ImageCardSection;
