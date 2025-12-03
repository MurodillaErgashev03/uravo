import styles from './casestudy.module.scss';
import img from 'src/assets/img/casestudy.png';
const caseStudies = [
  {
    id: 1,
    company: 'SBペイメントサービス様',
    description:
      'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ',
    logoText: 'SB Payment Service',
    imageAlt: 'Case Study 1',
  },
  {
    id: 2,
    company: 'SBペイメントサービス様',
    description:
      'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ',
    logoText: 'SB Payment Service',
    imageAlt: 'Case Study 2',
  },
  {
    id: 3,
    company: 'SBペイメントサービス様',
    description:
      'コンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコンテンツが入りますコ',
    logoText: 'SB Payment Service',
    imageAlt: 'Case Study 3',
  },
];

const CaseStudySection = () => {
  return (
    <section className={styles.caseSection}>
      <div className={styles.caseContainer}>
        <h2 className={styles.caseTitle}>導入事例</h2>

        <div className={styles.caseGrid}>
          {caseStudies.map((study) => (
            <div key={study.id} className={styles.caseCard}>
              <div className={styles.cardImageHeader}>
                <div className={styles.placeholderImage}>
                  <img src={img} alt="" width={340} height={200} />
                </div>
                <div className={styles.cardGreyBar}></div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.logoBadge}>
                  <span className={styles.logoIcon}>=</span>
                  {study.logoText}
                </div>

                <h3 className={styles.companyName}>{study.company}</h3>
                <p className={styles.caseDescription}>{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;