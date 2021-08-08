import React from 'react';
import LoadZone from '../../components/LoadZone/LoadZone';
import styles from './CompanyLogoPage.module.scss';

const CompanyLogoPage = () => {
  return (
    <div className={styles.logoPage}>
      <header className={styles.logoHeader}>
        <h2 className={styles.headerTitle}>Company Logo</h2>
        <p className={styles.headerDescription}>
          Logo should be square, 100px size and in png, jpeg file format.
        </p>
      </header>
      <div className={styles.loadZone}>
        <LoadZone />
      </div>
    </div>
  );
};

export default CompanyLogoPage;
