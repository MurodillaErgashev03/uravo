import styles from './pricing.module.scss';

function Pricing() {
  return (
    <div className={styles.pricing}>
      <h3 className={styles.title}>ー　サービス料金　ー</h3>
      <div className="container">
        <table className={styles.pricingTable}>
          <thead>
            <tr>
              <th>＜モデルプラン＞</th>
              <th>5ユーザー</th>
              <th>10ユーザー</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>初期設定費用</td>
              <td>¥350,000</td>
              <td>¥400,000</td>
            </tr>

            <tr>
              <td>月額利用料</td>
              <td>¥33,000</td>
              <td>¥50,000</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>料金事例が入ります</h3>

          <div className={styles.rows}>
            {[1, 2].map((_, idx) => (
              <div key={idx} className={styles.row}>
                <div className={styles.box}>
                  <p>初期費用</p>
                  <span>金額が入ります</span>
                </div>

                <div className={styles.plus}>＋</div>

                <div className={styles.box}>
                  <p>月額費用</p>
                  <span>金額が入ります</span>
                </div>

                <div className={styles.arrow}>▶</div>

                <div className={styles.totalBox}>
                  <p>金額が入ります</p>
                  <span>総額</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
