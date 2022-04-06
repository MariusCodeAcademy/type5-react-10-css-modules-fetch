const Icon = (props) => {
  return <i className={`fa ${props.icon} ${props.className}`} aria-hidden='true'></i>;
};

export default Icon;
