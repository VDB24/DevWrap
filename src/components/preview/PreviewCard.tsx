import React, { forwardRef } from 'react';
import type { WrappedData } from '../../types';
import styles from './PreviewCard.module.css';
import { TOOLS_OPTIONS, LANGUAGE_OPTIONS, PERSONALITY_OPTIONS } from '../../data/options';
import { FiActivity, FiCode, FiCoffee, FiGitCommit, FiClock, FiUsers, FiBox, FiUserCheck } from 'react-icons/fi';

interface PreviewCardProps {
  data: WrappedData;
  isExporting?: boolean;
}

export const PreviewCard = forwardRef<HTMLDivElement, PreviewCardProps>(({ data, isExporting }, ref) => {
  const { stats, tools, languages, details, theme, background } = data;

  const getTool = (id: string) => TOOLS_OPTIONS.find(t => t.id === id);
  const getLang = (id: string) => LANGUAGE_OPTIONS.find(l => l.id === id);
  const getPersonality = (id: string) => PERSONALITY_OPTIONS.find(p => p.id === id);

  const personality = getPersonality(details.personality);

  const bgStyle = personality ? {
    backgroundImage: `url('${personality.image}')`,
    opacity: background.intensity / 100
  } : {};

  return (
    <div 
      className={`${styles.container} ${isExporting ? styles.exporting : ''}`} 
      ref={ref} 
      data-theme={theme}
    >
      {/* Background Overlay */}
      <div className={styles.bgOverlay} style={bgStyle} />
      <div className={styles.gradientOverlay} />

      <div className={styles.content}>
        <header className={styles.header}>
            <div className={styles.subhead}>SOFTWARE ENGINEER</div>
            <h1 className={styles.title}>
              DEV 
              <span className={styles.titleStack}>
                <span className={styles.year}>2025</span>
                <span className={styles.wrapSub}>WRAP</span>
              </span>
            </h1>
            <div className={styles.tagline}>Code, Coffee, and Deploys</div>
        </header>

        <div className={styles.statsGrid}>
            <StatItem label="Lines of code" value={stats.linesOfCode} icon={<FiCode />} />
            <StatItem label="Commits" value={stats.commits} icon={<FiGitCommit />} />
            <StatItem label="Coffees Consumed" value={stats.beverages} icon={<FiCoffee />} />
            <StatItem label="Hours Coded" value={stats.hoursCoded} icon={<FiClock />} />
            <StatItem label="Bugs Fixed" value={stats.bugsFixed} icon={<FiActivity />} />
            <StatItem label="Projects Shipped" value={stats.projectsShipped} icon={<FiBox />} />
            <StatItem label="Hours in Meetings" value={stats.meetingHours} icon={<FiUsers />} />
            <StatItem label="Programmer Buddy" value={stats.buddy} icon={<FiUserCheck />} />
        </div>

        <div className={styles.bottomSection}>
             <div className={styles.leftCol}>
                {details.image && (
                    <div className={styles.polaroid} style={{ transform: 'rotate(-3deg)' }}>
                         <div className={styles.polaroidInner}>
                            <img src={details.image} alt="Profile" />
                            {/* Optional: Add marker doodle */}
                         </div>
                    </div>
                )}
                <div className={styles.userInfo}>
                    <h3>{details.role}</h3>
                    <p>at {details.company}</p>
                </div>
             </div>

             <div className={styles.rightCol}>
                <div className={styles.listSection}>
                    <h4>Most Used Apps</h4>
                    <div className={styles.iconRow}>
                        {tools.slice(0, 5).map(t => {
                            const tool = getTool(t);
                            return (
                                <span key={t} className={styles.techIcon}>
                                    {tool?.icon}
                                </span>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.listSection}>
                    <h4>Most Used Languages</h4>
                    <div className={styles.iconRow}>
                        {languages.slice(0, 5).map(l => {
                             const lang = getLang(l);
                             return (
                                <span key={l} className={styles.techIcon}>
                                    {lang?.icon}
                                </span>
                             );
                        })}
                    </div>
                </div>

                <div className={styles.personality}>
                    <span className={styles.personalityLabel}>Personality</span>
                    <span className={styles.personalityValue}>{details.personality}</span>
                </div>
             </div>
        </div>
      </div>
          
      {/* Decorative Elements */}
      <div className={styles.decorativeCode}>{'</>'}</div>
    </div>
  );
});

const StatItem = ({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) => (
    <div className={styles.statItem}>
        <div className={styles.statLabel}>{icon} {label}</div>
        <div className={styles.statValue}>{value}</div>
    </div>
);
