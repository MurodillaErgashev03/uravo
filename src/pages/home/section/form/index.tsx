import React from 'react';
import styles from './form.module.scss';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>お問い合わせ内容</h2>
          <p className={styles.formSubtitle}>
            お問い合わせには、以下の必須項目の入力をお願いいたします。
          </p>

          <form className={styles.form}>
            {/* Name Row */}
            <div className={styles.formRow}>
              <div className={styles.formGroupHalf}>
                <label className={styles.label}>姓</label>
                <input type="text" className={styles.inputField} />
              </div>
              <div className={styles.formGroupHalf}>
                <label className={styles.label}>名</label>
                <input type="text" className={styles.inputField} />
              </div>
            </div>

            {/* Company Name */}
            <div className={styles.formGroup}>
              <label className={styles.label}>会社・組織名</label>
              <input type="text" className={styles.inputField} />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label className={styles.label}>メールアドレス</label>
              <input type="email" className={styles.inputField} />
            </div>

            {/* Email Confirm - Image shows duplicate label */}
            <div className={styles.formGroup}>
              <label className={styles.label}>メールアドレス</label>
              <input type="email" className={styles.inputField} />
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <label className={styles.label}>電話番号</label>
              <input type="tel" className={styles.inputField} />
            </div>

            {/* Inquiry Content */}
            <div className={styles.formGroup}>
              <label className={styles.label}>お問い合わせ内容</label>
              <textarea className={styles.textareaField} rows={8}></textarea>
            </div>

            {/* Privacy Policy Section */}
            <div className={styles.privacySection}>
              <h3 className={styles.privacyTitle}>
                個人情報の取り扱いについて
              </h3>

              <div className={styles.privacyCheckGroup}>
                <label className={styles.checkboxLabel}>
                  <h4 className={styles.confirmTitle}>確認欄</h4>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>
                      個人情報の取扱いについて、同意の上送信します。原則としていただいた個人情報は、第三者に提供することはございません。
                    </span>
                  </div>
                </label>
              </div>

              <p className={styles.privacyNote}>
                当社の個人情報保護に関する取り組みについては、
                <a href="#" className={styles.link}>
                  プライバシーポリシーの個人情報の取り扱いについて
                </a>
                をご覧ください。
                <br />
                以上の個人情報の利用目的等にご同意いただける場合は、入力内容を送信ください。
                <br />
                <span className={styles.faintText}>
                  入力された情報は、当社委託先にて管理されます。
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <div className={styles.submitRow}>
              <button type="button" className={styles.submitButton}>
                確認
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
