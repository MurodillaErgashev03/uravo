import styles from './header.module.scss';
import logo from 'src/assets/img/logo.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="logo" />
            <ul
              style={{
                display: 'flex',
                gap: '24px',
                marginLeft: '80px',
              }}
            >
              <li>ホームページ</li>
              <li>サービス</li>
              <li>会社</li>
              <li>価格設定</li>
            </ul>
          </div>

          <button>資料請求する</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
