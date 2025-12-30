import React from 'react';
import type { BackgroundSettings } from '../../types';
import { Card } from '../ui/Card';
import { FiImage } from 'react-icons/fi';

interface BackgroundSettingsProps {
  settings: BackgroundSettings;
  onChange: (key: keyof BackgroundSettings, value: any) => void;
}

export const BackgroundSettingsForm: React.FC<BackgroundSettingsProps> = ({ settings, onChange }) => {
  
  return (
    <Card title="Background Settings" icon={<FiImage />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.85rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
                Character Opacity: {settings.intensity}%
              </label>
           </div>
           
           <input 
             type="range" 
             min="0" 
             max="100" 
             value={settings.intensity} 
             onChange={(e) => onChange('intensity', parseInt(e.target.value))}
             style={{ width: '100%', cursor: 'pointer' }}
           />
           <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
             Adjust how visible the character background is
           </p>
        </div>
      </div>
    </Card>
  );
};
