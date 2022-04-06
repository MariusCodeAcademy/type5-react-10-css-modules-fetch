import React from 'react';
import css from './SectionHeading.module.css';

const SectionHeading = (props) => {
  return (
    <>
      <h2 className={css.title}>{props.title}</h2>
      <p className={css.para}>{props.subtitle}</p>
    </>
  );
};

export default SectionHeading;
