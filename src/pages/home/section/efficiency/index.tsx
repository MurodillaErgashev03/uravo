import { Progress } from 'src/assets/svg';
import styles from './efficiency.module.scss';
import img from 'src/assets/img/efficiency.png';

function Efficiency() {
  const cards = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: '帳票管理機能',
    text: `テキストテキストテキストテキスト
  テキストテキストテキストテキスト
  テキストテキストテキストテキスト
  テキストテキストテキストテキスト
  テキストテキストテキストテキストテキストテキストテキストテキスト
  テキストテキストテキストテキスト テキス`,
  }));
  return (
    <div className={styles.efficiency}>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.title}>ー　業務効率をUPさせる機能が充実　ー</h3>
          <img className={styles.images} src={img} alt="img" />
          <div className={styles.cards}>
            {cards.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.header}>
                  <Progress /> {item.title}
                </div>
                <div className={styles.body}>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Efficiency;
