import styles from './issues.module.scss';

function Issues() {
  return (
    <div className={styles.issues}>
      <div className="container">
        <div className={styles.content}>
          <h4>
            販売管理ツールはどれも同じように見えるけど、
            実際に導入してみたらちょっとした不満が山積み。。。
          </h4>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.header}>費用のお悩み</div>
              <div className={styles.body}>
                <p>. 毎月のライセンス料が高くて辛い</p>
                <p>. 今からツールを変えようとすると</p>
                <p>. データ移行だけで何百万と必要になってしまう</p>
                <p>. システム改修は費用が高い</p>
                <p>
                  .
                  ライセンス料以外にサーバー維持費など毎月の支払いが高くなっている
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.header}>費用のお悩み</div>
              <div className={styles.body}>
                <p>. 毎月のライセンス料が高くて辛い</p>
                <p>. 今からツールを変えようとすると</p>
                <p>. データ移行だけで何百万と必要になってしまう</p>
                <p>. システム改修は費用が高い</p>
                <p>
                  .
                  ライセンス料以外にサーバー維持費など毎月の支払いが高くなっている
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.header}>費用のお悩み</div>
              <div className={styles.body}>
                <p>. 毎月のライセンス料が高くて辛い</p>
                <p>. 今からツールを変えようとすると</p>
                <p>. データ移行だけで何百万と必要になってしまう</p>
                <p>. システム改修は費用が高い</p>
                <p>
                  .
                  ライセンス料以外にサーバー維持費など毎月の支払いが高くなっている
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Issues;
