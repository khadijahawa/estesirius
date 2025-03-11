// footer.js

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMain}>
        <div className={styles.footerRow}>
          {/* Logo and About Section */}
          <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
            <div className={styles.footerLogo}>
              <span className={styles.logoTextPrimary}>CLINICA</span>
              <span className={styles.logoTextSecondary}>WP</span>
            </div>
            <p className={styles.footerDescription}>
              Suspendisse commodo bibendum purus at hendrerit. Vivamus aliquam bibendum.
            </p>
            <div className={styles.socialIcons}>
              <Link href="#" className={`${styles.socialIcon} ${styles.facebook}`}><i className="fab fa-facebook-f"></i></Link>
              <Link href="#" className={`${styles.socialIcon} ${styles.twitter}`}><i className="fab fa-twitter"></i></Link>
              <Link href="#" className={`${styles.socialIcon} ${styles.youtube}`}><i className="fab fa-youtube"></i></Link>
              <Link href="#" className={`${styles.socialIcon} ${styles.vimeo}`}><i className="fab fa-vimeo-v"></i></Link>
            </div>
          </div>

          {/* Our Customers Section */}
          <div className={`${styles.footerColumn} ${styles.customersColumn}`}>
            <h3 className={styles.footerHeading}>Our Customers</h3>
            <p className={styles.customerText}>
              Quisque in lorem ut arcu pretium aliquet praesent.
            </p>
            <div className={styles.testimonial}>
              <div className={styles.testimonialAvatar}>
                <img src="./images/john-doe.jpg" alt="John Doe" />
              </div>
              <div className={styles.testimonialInfo}>
                <h4 className={styles.testimonialName}>John Doe</h4>
                <p className={styles.testimonialRole}>Designer</p>
              </div>
            </div>
          </div>

          {/* Quick Contacts Section */}
          <div className={`${styles.footerColumn} ${styles.contactsColumn}`}>
            <h3 className={styles.footerHeading}>Quick Contacts</h3>
            <ul className={styles.contactInfo}>
              <li>
                <i className={`${styles.contactIcon} ${styles.phone}`}></i>
                <span className={styles.contactLabel}>Phone : </span>
                <span className={styles.contactValue}>+36 4365390</span>
              </li>
              <li>
                <i className={`${styles.contactIcon} ${styles.email}`}></i>
                <span className={styles.contactLabel}>Email : </span>
                <span className={styles.contactValue}>clinic@surgery.co</span>
              </li>
              <li>
                <i className={`${styles.contactIcon} ${styles.address}`}></i>
                <span className={styles.contactLabel}>Address : </span>
                <span className={styles.contactValue}>Main St, 1234</span>
              </li>
              <li>
                <i className={`${styles.contactIcon} ${styles.country}`}></i>
                <span className={styles.contactLabel}>Country : </span>
                <span className={styles.contactValue}>United States</span>
              </li>
            </ul>
          </div>

          {/* Our Gallery Section */}
          <div className={`${styles.footerColumn} ${styles.galleryColumn}`}>
            <h3 className={styles.footerHeading}>Our Gallery</h3>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryItem}>
                <img src="./images/img1.jpg" alt="Gallery Image 1" />
              </div>
              <div className={styles.galleryItem}>
                <img src="./images/img2.jpg" alt="Gallery Image 2" />
              </div>
              <div className={styles.galleryItem}>
                <img src="./images/img3.jpg" alt="Gallery Image 3" />
              </div>
              <div className={styles.galleryItem}>
                <img src="./images/img4.jpg" alt="Gallery Image 4" />
              </div>
              <div className={styles.galleryItem}>
                <img src="./images/img5.jpg" alt="Gallery Image 5" />
              </div>
              <div className={styles.galleryItem}>
                <img src="./images/img6.jpg" alt="Gallery Image 6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <span className={styles.copyrightIcon}>©</span>
          <span className={styles.copyrightText}>Copyright 2022 Nicdark Themes</span>
        </div>
        <div className={styles.envatoBadge}>
          <i className={styles.trophyIcon}></i>
          <span className={styles.envatoText}>Envato Power Elite Author</span>
        </div>
        <div className={styles.footerSubscribe}>
          <input type="email" placeholder="Email" className={styles.subscribeInput} />
          <button className={styles.sendButton}>SEND</button>
          <div className={styles.chatButtonContainer}>
            <button className={styles.chatButton}>
              <span className={styles.chatIcon}></span>
              <div className={styles.newBadge}>NEW</div>
              <span className={styles.chatNumber}>54</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;