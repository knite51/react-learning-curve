import ReusableCol from '../../../classes/firstSection/ReusableCol';
import styles from './CssModule.module.css';

export const CssModule = () => {
  return (
    <>
      <ReusableCol>
        <button className={styles['btn-ex']}>CSS Module</button>
      </ReusableCol>
    </>
  );
};
