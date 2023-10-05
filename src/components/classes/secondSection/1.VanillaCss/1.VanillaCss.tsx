// VanillaCss: Css class with same name clashes with eachother using this method
// Css Module: Solves the above problem. Local scope

import ReusableCol from '../../firstSection/ReusableCol';
import './VanillaCss.css';
import styles from './VanillaCss.module.css'; //styles here is a JS object that contains all defined css styles in module/file. You can use dot or bracket notation to access

const VanillaCss = () => {
  return (
    <>
      <ReusableCol colDigit="1">
        <button className="btn-ay">Vanilla CSS</button>
      </ReusableCol>
      <ReusableCol colDigit="3">
        <button className={styles.btnAyModule}>Vanilla CSS with Module</button>
        <button
          className={[
            styles.btnAyModule,
            styles['text-underline'],
            'mt-2',
          ].join(' ')}
        >
          Vanilla CSS with Module MultiClass
        </button>
      </ReusableCol>
    </>
  );
};

export default VanillaCss;
