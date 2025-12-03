import styles from './connectivity.module.scss';
import img from 'src/assets/img/connectivity.png';
import line from 'src/assets/img/line.png';
import cardImg from 'src/assets/img/connectivity-card-img.png';

function Connectivity() {
  return (
    <div className={styles.connectivity}>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.title}>ー　外部ツールとの連携も可能　ー</h3>
          <img className={styles.images} src={img} alt="" />

          <div>
            <img
              style={{
                width: '100%',
              }}
              src={line}
              alt="line"
            />

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.header}>EC</div>
                <img src={cardImg} alt="cardImg" />
              </div>
              <div className={styles.card}>
                <div className={styles.header}>EC</div>
                <img src={cardImg} alt="cardImg" />
              </div>
              <div className={styles.card}>
                <div className={styles.header}>EC</div>
                <img src={cardImg} alt="cardImg" />
              </div>
              <div className={styles.card}>
                <div className={styles.header}>EC</div>
                <img src={cardImg} alt="cardImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connectivity;
