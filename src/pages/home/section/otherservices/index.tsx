import styles from './otherServices.module.scss';
import img from 'src/assets/img/otherstudy.png';
const OtherServices = () => {
  return (
    <section className={styles.otherServicesSection}>
      <div className={styles.otherServicesContainer}>
        {/* Title: 'Other Service Businesses' */}
        <h2 className={styles.otherServicesTitle}>その他のサービス事業</h2>

        {/* Content: Just an Image */}
        <div className={styles.otherServicesContent}>
          {/* Replace src with your actual image file path */}
          <img
            src={img}
            alt="Service Lineup Map"
            className={styles.serviceImage}
          />
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
