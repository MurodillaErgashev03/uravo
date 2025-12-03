import React from 'react';
import { 
  FacebookFilled, 
  TwitterOutlined, 
  InstagramOutlined, 
  YoutubeFilled, 
  MessageFilled 
} from '@ant-design/icons';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        
        {/* Navigation Columns Wrapper */}
        <div className={styles.footerNav}>
          
          {/* Column 1 */}
          <div className={styles.navColumn}>
            <a href="#" className={styles.link}>TOP</a>
            <a href="#" className={styles.link}>インフォメーション</a>
            <a href="#" className={styles.link}>導入事例／資料</a>
            <a href="#" className={styles.link}>お役立ちブログ</a>
            <a href="#" className={styles.link}>ITビジネスパートナー募集</a>
            <a href="#" className={styles.link}>お問い合わせ</a>
            <a href="#" className={styles.link}>メールマガジン登録</a>
          </div>

          {/* Column 2 */}
          <div className={styles.navColumn}>
            <a href="#" className={styles.link}>サービス</a>
            <a href="#" className={styles.link}>コンサルティング</a>
            <a href="#" className={styles.link}>システム／クラウド開発</a>
            <a href="#" className={styles.link}>お役立ちブログ</a>
            <a href="#" className={styles.link}>A I／クラウド製品</a>
          </div>

          {/* Column 3 */}
          <div className={styles.navColumn}>
            <a href="#" className={styles.link}>インフォメーション</a>
            <a href="#" className={styles.link}>導入事例／資料</a>
            <a href="#" className={styles.link}>お役立ちブログ</a>
            <a href="#" className={styles.link}>ITビジネスパートナー募集</a>
            <a href="#" className={styles.link}>お問い合わせ</a>
            <a href="#" className={styles.link}>メールマガジン登録</a>
          </div>

          {/* Column 4 */}
          <div className={styles.navColumn}>
            <a href="#" className={styles.link}>企業情報</a>
            <a href="#" className={styles.link}>採用情報</a>
          </div>

        </div>

        {/* Brand & Social Side */}
        <div className={styles.brandSide}>
          {/* Logo Placeholder */}
          <div className={styles.logoArea}>
            <span className={styles.logoText}>GiG Works xIT</span>
          </div>
          
          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconLink}><FacebookFilled /></a>
            <a href="#" className={styles.iconLink}><TwitterOutlined /></a>
            <a href="#" className={styles.iconLink}><InstagramOutlined /></a>
            <a href="#" className={styles.iconLink}><MessageFilled /></a>
            <a href="#" className={styles.iconLink}><YoutubeFilled /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;