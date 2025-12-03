import { Flex } from 'antd';
import styles from './heritage.module.scss';

interface PricingPlan {
  label: string;
  fiveUsers: string;
  tenUsers: string;
}

const pricingData: PricingPlan[] = [
  { label: '初期費用', fiveUsers: '¥350,450', tenUsers: '¥400,000' },
  { label: '月額利用料', fiveUsers: '¥533,000', tenUsers: '¥50,000' },
];

const features = [
  {
    number: '02',
    title: '導入後も安心のサポート体制',
    description:
      'サポートセンターでわからないこと、ご相談はいつでも受付。簡単操作、2重入力不要でミスを防止します。',
  },
  {
    number: '03',
    title: '御社独自にカスタマイズ',
    description:
      'どうしても避けられない運用や、追加機能のご要望にもお応えできます。',
  },
  {
    number: '04',
    title: 'クラウド管理なので安心',
    description: 'クラウドサービスの為、サーバー維持管理が導入会社様では不要',
  },
];

const BusinessFeatures = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          私たちは中小企業のシステムを50年支援し続けてきました。
        </h2>

        <div className={styles.mainCard}>
          <div
            style={{
              background: '#D8663A',
              padding: '10px',
            }}
          >
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>01</span>
              <span className={styles.badgeText}>費用のお悩み</span>
            </div>
          </div>
          <Flex className={styles.main} align="center" gap={40}>
            <div className={styles.mainCardContent}>
              <p className={styles.mainCardDescription}>
                法制度改正やシステムのバージョンアップによる、新たなシステム改変費用が不要です。サブスクリプション型の為、長期的な利用・コスト管理も可能です。
              </p>
            </div>

            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th className={styles.pricingHeader}>&lt;モデルプラン&gt;</th>
                  <th
                    style={{
                      background: '#E9AD88',
                      color: 'white',
                    }}
                    className={styles.pricingHeader}
                  >
                    5ユーザー
                  </th>
                  <th
                    className={`${styles.pricingHeader} ${styles.pricingHeaderLight}`}
                  >
                    10ユーザー
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr key={index} className={styles.pricingRow}>
                    <td className={styles.pricingLabel}>{row.label}</td>
                    <td className={styles.pricingValue}>{row.fiveUsers}</td>
                    <td className={styles.pricingValue}>{row.tenUsers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Flex>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div className={styles.card}>
              <div className={styles.featureTitle}>
                <span className={styles.featureNumber}>{feature.number}</span>
                <span className={styles.featureName}>{feature.title}</span>
              </div>
              <div key={feature.number} className={styles.featureCard}>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
