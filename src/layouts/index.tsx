import React from 'react';
import styles from './index.css';
import Header from './Header/Header'

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Header></Header>
      {props.children}
    </div>
  );
};

export default BasicLayout;
