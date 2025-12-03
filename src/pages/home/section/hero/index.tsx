import styles from './hero.module.scss';
import heroText from 'src/assets/img/hero-text.png';
import img from 'src/assets/img/hero-img.png';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <h3>今の販売管理ツールでお悩みなら</h3>
            <div className={styles.secondBlock}>
              <div>月額3</div>
              <p>万円から使える</p>
            </div>
            <div className={styles.sms}>
              <p>クラウドソリューション</p>
            </div>
            <img src={heroText} alt="heroText" />
            <button className={styles.button}>
              資料請求・導入のご相談はこちらから
            </button>
          </div>
          <div className={styles.rightBlock}>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
