import React from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import styles from './PreviewController.module.css';

function PreviewController({ currentMode, onModeChange }) {
  return (
    <div className={styles.previewBar}>
      <div className={styles.previewInfo}>
        <span className={styles.previewLabel}>Responsive Viewport:</span>
      </div>

      <div className={styles.modeToggles}>
        <button
          className={`${styles.toggleBtn} ${currentMode === 'desktop' ? styles.toggleActive : ''}`}
          onClick={() => onModeChange('desktop')}
        >
          <Monitor size={15} />
          <span>Desktop (100%)</span>
        </button>

        <button
          className={`${styles.toggleBtn} ${currentMode === 'tablet' ? styles.toggleActive : ''}`}
          onClick={() => onModeChange('tablet')}
        >
          <Tablet size={15} />
          <span>Tablet (768px)</span>
        </button>

        <button
          className={`${styles.toggleBtn} ${currentMode === 'mobile' ? styles.toggleActive : ''}`}
          onClick={() => onModeChange('mobile')}
        >
          <Smartphone size={15} />
          <span>Mobile (420px)</span>
        </button>
      </div>
    </div>
  );
}

export default PreviewController;
