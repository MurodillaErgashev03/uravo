import styles from './strengths.module.scss';

interface CompetitorData {
  name: string;
  initialCost: string;
  monthlyCost: string;
  developmentCost: string;
  customization: boolean;
  basicFeatures: boolean;
  externalIntegration: boolean;
}

interface HubSpotData {
  initialCost: { price: string; promo?: string };
  monthlyCost: string;
  developmentCost: string;
  customization: boolean;
  basicFeatures: boolean;
  externalIntegration: boolean;
}

interface ComparisonTableProps {
  title?: string;
  competitors?: CompetitorData[];
  hubspot?: HubSpotData;
}

const defaultCompetitors: CompetitorData[] = [
  {
    name: 'A社',
    initialCost: '¥252,450',
    monthlyCost: '¥574,750',
    developmentCost: '¥574,750',
    customization: false,
    basicFeatures: false,
    externalIntegration: false,
  },
  {
    name: 'B社',
    initialCost: '¥275,000',
    monthlyCost: '¥624,800',
    developmentCost: '¥624,800',
    customization: false,
    basicFeatures: false,
    externalIntegration: false,
  },
  {
    name: 'C社',
    initialCost: '¥165,000',
    monthlyCost: '¥484,000',
    developmentCost: '¥484,000',
    customization: false,
    basicFeatures: false,
    externalIntegration: false,
  },
];

const defaultHubSpot: HubSpotData = {
  initialCost: { price: '300,000円', promo: '毎月3社限定で0円' },
  monthlyCost: '33,000円〜',
  developmentCost: '2,000,000円〜',
  customization: true,
  basicFeatures: true,
  externalIntegration: true,
};

const ComparisonTable = ({
  title = '他社との違い',
  competitors = defaultCompetitors,
  hubspot = defaultHubSpot,
}: ComparisonTableProps) => {
  const renderCircle = (filled: boolean) => {
    return filled ? (
      <span className={styles.filledCircle} />
    ) : (
      <span className={styles.circle} />
    );
  };

  return (
    <div className={styles.table}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.mainTable}>
            <thead>
              <tr className={styles.headerRow}>
                <th></th>
                {competitors.map((comp) => (
                  <th key={comp.name}>{comp.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className={styles.dataRow}>
                <td>初期費用</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className={styles.price}>
                    {comp.initialCost}
                  </td>
                ))}
              </tr>
              <tr className={styles.dataRow}>
                <td>月額</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className={styles.price}>
                    {comp.monthlyCost}
                  </td>
                ))}
              </tr>
              <tr className={styles.dataRow}>
                <td>開発費用</td>
                {competitors.map((comp) => (
                  <td key={comp.name} className={styles.price}>
                    {comp.developmentCost}
                  </td>
                ))}
              </tr>
              <tr className={styles.dataRow}>
                <td>カスタマイズ性</td>
                {competitors.map((comp) => (
                  <td key={comp.name}>{renderCircle(comp.customization)}</td>
                ))}
              </tr>
              <tr className={styles.dataRow}>
                <td>基本機能</td>
                {competitors.map((comp) => (
                  <td key={comp.name}>{renderCircle(comp.basicFeatures)}</td>
                ))}
              </tr>
              <tr className={styles.dataRow}>
                <td>外部連携</td>
                {competitors.map((comp) => (
                  <td key={comp.name}>
                    {renderCircle(comp.externalIntegration)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* Highlighted HubSpot column */}
          <div className={styles.highlightColumn}>
            <div className={styles.highlightHeader}>
              <span className={styles.logoText}>
                <svg
                  className={styles.logoIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="10" fill="#ff7a59" />
                  <circle cx="12" cy="12" r="4" fill="white" />
                </svg>
                HubSpot
              </span>
            </div>
            <div className={styles.highlightCell}>
              <div className={styles.highlightPrice}>
                <span className={styles.strikethrough}>
                  {hubspot.initialCost.price}
                </span>
                <br />
                <span className={styles.promo}>
                  {hubspot.initialCost.promo}
                </span>
              </div>
            </div>
            <div className={styles.highlightCell}>
              <span className={styles.highlightPrice}>
                {hubspot.monthlyCost}
              </span>
            </div>
            <div className={styles.highlightCell}>
              <span className={styles.highlightPrice}>
                {hubspot.developmentCost}
              </span>
            </div>
            <div className={styles.highlightCell}>
              {renderCircle(hubspot.customization)}
            </div>
            <div className={styles.highlightCell}>
              {renderCircle(hubspot.basicFeatures)}
            </div>
            <div className={styles.highlightCell}>
              {renderCircle(hubspot.externalIntegration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
