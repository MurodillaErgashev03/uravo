import styles from './banner.module.scss';
import img from 'src/assets/img/banner.png';
import bg from 'src/assets/img/bannerBg.png';

function Banner() {
  return (
    <div className="container">
      <div className={styles.banner}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
