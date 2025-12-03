import { ArrowLeft } from 'src/assets/svg';
import styles from './savings.module.scss';
import { Flex } from 'antd';

function Savings() {
  const cardData = [1, 2, 3, 4];
  return (
    <div className={styles.savings}>
      <div className="container">
        <h3 className={styles.title}>- ソルクラでできるコストカット - </h3>

        <div className={styles.cards}>
          {cardData.map((_, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.header}>
                毎月手動で送っていた請求書送付を自動化
              </div>
              <h5>
                <span>年100万</span>
                円の削減
              </h5>
              <Flex
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '40px',
                }}
              >
                <div className={styles.littleCard}>
                  <div className={styles.topHeader}>追加10時間</div>
                  <div className={styles.topMain}>作業時間</div>
                </div>
                <ArrowLeft />

                <div className={styles.cardWrap}>
                  作業時間
                  <br /> 30時間
                </div>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Savings;
