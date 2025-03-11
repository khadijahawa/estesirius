// header.js

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div 
        className={styles.headerBackground} 
        style={{ backgroundImage: 'url(./images/background1.jpg)' }}
      >
        <div className={styles.topBar}>
          <div className={styles.locationInfo}>
            <i className={styles.phoneIcon}></i>
            <span>ST. LAMBOR, NEW YORK ( US )</span>
          </div>
          
          <div className={styles.newsBadge}>
            <span>NEWS</span>
          </div>
          
          <div className={styles.clinicContact}>
            <i className={styles.contactIcon}></i>
            <span>CLINIC: +31 2349334972</span>
          </div>
        </div>
        
        <div className={styles.mainNavigationContainer}>
          <div className={styles.navigationWrapper}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <span className={styles.logoTextPrimary}>CLINICA</span>
                <span className={styles.logoTextSecondary}>WP</span>
              </div>
            </div>
            
            <nav className={styles.mainNavigation}>
              <ul>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT US</Link></li>
                <li><Link href="/shop">SHOP</Link></li>
                <li><Link href="/pages">PAGES</Link></li>
                <li><Link href="/blog">BLOG</Link></li>
                <li><Link href="/contact">CONTACT</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className={styles.bookingButton}>
            <Link href="/booking" className={styles.bookNowBtn}>BOOK NOW</Link>
          </div>
        </div>
        
        <div className={styles.pageTitle}>
          <h1>Our Shop</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;