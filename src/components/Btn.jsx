import css from './Btn.module.css';
// props.children - tai kas irasyta tarp pradzios ir pabaigos BTN tagu
const Btn = (props) => {
  return <button className={css.btn}>{props.children}</button>;
};

export default Btn;
