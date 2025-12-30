import React, { type ReactNode } from 'react';
import { Card } from '../ui/Card';
import styles from './Forms.module.css';

interface Option {
  id: string;
  icon: ReactNode;
}

interface MultiSelectorProps {
  title: string;
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  maxSelect?: number;
  icon?: ReactNode;
  subtitle?: string;
}

export const MultiSelector: React.FC<MultiSelectorProps> = ({ 
  title, options, selected, onChange, maxSelect = 5, icon, subtitle 
}) => {
  
  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(item => item !== id));
    } else {
      if (selected.length < maxSelect) {
        onChange([...selected, id]);
      }
    }
  };

  return (
    <Card title={title} icon={icon}>
      {subtitle && <p style={{ color: '#888', fontSize: '0.9rem' }}>{subtitle}</p>}
      <div className={styles.selectorGrid}>
        {options.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <div 
              key={option.id}
              className={`${styles.selectionItem} ${isSelected ? styles.selected : ''}`}
              onClick={() => toggleSelection(option.id)}
            >
              <div className={styles.iconWrapper}>{option.icon}</div>
              <span>{option.id}</span>
            </div>
          );
        })}
      </div>
      <p style={{ textAlign: 'right', fontSize: '0.8rem', color: '#666' }}>
        {selected.length}/{maxSelect} selected
      </p>
    </Card>
  );
};
