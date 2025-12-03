import React from 'react';
import { Flex } from 'antd';
import {
  StarOutlined,
  DesktopOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  DeploymentUnitOutlined,
  SyncOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import styles from './implementation.module.scss';

// Data structure for easy editing
const steps = [
  {
    step: 'STEP 01',
    title: 'こちらのフォームよりお問い合わせください',
    description:
      '文章文章文章文章文章文章文章文章文章 文章文章文章文章文章文章文章文章文章',
    icon: <StarOutlined />,
  },
  {
    step: 'STEP 02',
    title: 'デモ説明・ヒアリング',
    description:
      '改めてお時間を頂戴し、貴社に最適なプラン、システムをご提案させていただきます。',
    icon: <DesktopOutlined />,
  },
  {
    step: 'STEP 03',
    title: 'ご提案',
    description:
      '改めてお時間を頂戴し、貴社に最適なプラン、システムをご提案させていただきます。貴社に最適なプラン、システムをご提案させていただきます。',
    icon: <FileTextOutlined />,
  },
  {
    step: 'STEP 04',
    title: '要件定義',
    description:
      'ご発注をいただけた場合は、ご提案内容からさらに深ぼってシステムの詳細仕様をすり合わせていただきます。',
    icon: <ShoppingOutlined />,
  },
  {
    step: 'STEP 05',
    title: 'システム設計・開発',
    description:
      '開発が必要になった場合は、設計・開発を進めさせていただきます。スケジュールはお客様に合わせて調整可能です。',
    icon: <DeploymentUnitOutlined />,
  },
  {
    step: 'STEP 06',
    title: '導入・運用',
    description:
      '導入準備、運用テスト後に、既存ツールのデータを入れ込んで稼働開始となります。',
    icon: <SyncOutlined />,
  },
  {
    step: 'STEP 07',
    title: '保守',
    description:
      'アップデート内容のメール通知・機能追加・カスタマイズ・お問い合わせ等のサポート体制を完備しています。',
    icon: <SafetyCertificateOutlined />,
  },
];

const FlowSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.flowMainTitle}>
          <span>導入の流れ</span>
        </h2>

        <div className={styles.flowContainer}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepRow}>
              <div className={styles.stepIndicator}>
                <span className={styles.stepLabel}>{item.step}</span>
                <div className={styles.iconCircle}>{item.icon}</div>
                {index !== steps.length - 1 && (
                  <div className={styles.verticalLine}></div>
                )}
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <div className={styles.stepBox}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
