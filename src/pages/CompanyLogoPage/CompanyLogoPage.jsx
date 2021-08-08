import React from 'react';
import styles from './CompanyLogoPage.module.scss';

const CompanyLogoPage = () => {
  return (
    <div className={styles.logoPage}>
      <header className={styles.logoHeader}>
        <h2>Company Logo</h2>
        <p>Logo should be square, 100px size and in png, jpeg file format.</p>
      </header>
    </div>
  );
};

export default CompanyLogoPage;
