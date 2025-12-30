import React, { type ChangeEvent } from 'react';
import type { PersonalDetails } from '../../types';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { FiUser, FiBriefcase, FiAperture, FiImage } from 'react-icons/fi';
import styles from './Forms.module.css';
import { PERSONALITY_OPTIONS } from '../../data/options';

interface PersonalDetailsFormProps {
  details: PersonalDetails;
  onChange: (key: keyof PersonalDetails, value: string | null) => void;
}

export const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ details, onChange }) => {
  
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange('image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card title="Personal Details" icon={<FiUser />}>
      <div className={styles.grid}>
        <Input
          label="Your Role"
          icon={<FiUser />}
          value={details.role}
          onChange={(e) => onChange('role', e.target.value)}
          placeholder="Software Engineer"
        />
        <Input
          label="Company"
          icon={<FiBriefcase />}
          value={details.company}
          onChange={(e) => onChange('company', e.target.value)}
          placeholder="Company Name"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.85rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
            Choose Your Character
        </label>
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', 
            gap: '0.8rem' 
        }}>
            {PERSONALITY_OPTIONS.map((option) => (
                <div 
                    key={option.id}
                    onClick={() => onChange('personality', option.id)}
                    title={option.label}
                    style={{
                        cursor: 'pointer',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: details.personality === option.id 
                            ? '2px solid var(--primary-color)' 
                            : '2px solid transparent',
                        opacity: details.personality === option.id ? 1 : 0.6,
                        transition: 'all 0.2s',
                        background: '#1a1a1a',
                        aspectRatio: '1'
                    }}
                >
                    <img 
                        src={option.image} 
                        alt={option.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.85rem', color: '#888', fontWeight: 600, textTransform: 'uppercase' }}>
          Upload Photo
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <label 
            style={{ 
              background: '#333', 
              padding: '0.5rem 1rem', 
              borderRadius: '4px', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}
          >
            <FiImage /> Choose File
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }} 
            />
          </label>
          <span style={{ fontSize: '0.8rem', color: '#666' }}>
            {details.image ? 'Image uploaded' : 'No file chosen'}
          </span>
        </div>
        {details.image && (
          <img 
            src={details.image} 
            alt="Preview" 
            style={{ 
              width: '60px', 
              height: '60px', 
              objectFit: 'cover', 
              borderRadius: '50%', 
              marginTop: '0.5rem',
              border: '2px solid var(--primary-color)'
            }} 
          />
        )}
      </div>
    </Card>
  );
};
