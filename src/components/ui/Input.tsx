import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, icon, className = '', ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label className={styles.label}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {label}
      </label>
      <input className={styles.input} {...props} />
    </div>
  );
};
