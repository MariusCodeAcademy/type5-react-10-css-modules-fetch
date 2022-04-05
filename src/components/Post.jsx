import css from './Post.module.css';

console.log('css ===', css);

const Post = () => (
  <div className={`border ${css.post}`}>
    <h2 className={css.title}>Post title</h2>
    <p className={css.text}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, modi.
    </p>
    <button className={css.btn}>Learn more</button>
  </div>
);

export default Post;
