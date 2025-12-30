import React from 'react';
import type { Theme } from '../../types';
import { Card } from '../ui/Card';
import { FiLayout } from 'react-icons/fi';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onChange: (theme: Theme) => void;
}

const THEMES: { id: Theme; name: string; color: string }[] = [
  { id: 'main', name: 'Neon Green', color: '#00ff41' }, // Hardcoded to match vars
  { id: 'purple', name: 'Purple Smoke', color: '#d946ef' },
  { id: 'blue', name: 'Cyber Blue', color: '#0ea5e9' },
  { id: 'orange', name: 'Sunset Orange', color: '#f97316' },
];

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onChange }) => {
  return (
    <Card title="Choose Theme" icon={<FiLayout />}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
        {THEMES.map((theme) => (
          <div
            key={theme.id}
            onClick={() => onChange(theme.id)}
            style={{
              background: '#0a0a0a',
              border: `1px solid ${currentTheme === theme.id ? theme.color : '#333'}`,
              borderRadius: '12px',
              padding: '1.5rem',
              cursor: 'pointer',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
             <div 
               style={{ 
                 width: '30px', 
                 height: '30px', 
                 borderRadius: '50%', 
                 background: theme.color,
                 margin: '0 auto 0.5rem',
                 boxShadow: `0 0 10px ${theme.color}`
               }} 
             />
             <span style={{ fontSize: '0.9rem', color: currentTheme === theme.id ? '#fff' : '#888' }}>
               {theme.name}
             </span>
             {currentTheme === theme.id && (
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.7rem', 
                  color: theme.color 
                }}>
                  ✓ Selected
                </div>
             )}
          </div>
        ))}
      </div>
    </Card>
  );
};
