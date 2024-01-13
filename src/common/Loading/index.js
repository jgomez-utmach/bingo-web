import Styles from '@common/Loading/styles.module.css';

function LoadingSpinner() {
  return (
    <div className={Styles.LoadingSpinner}>
      <div className={Styles.spinner}></div>
    </div>
  );
}

export default LoadingSpinner;
