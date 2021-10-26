import с from './Container.module.css';

function Container({ children }) {
  return <div className={с.App}>{children}</div>;
}
export default Container;
