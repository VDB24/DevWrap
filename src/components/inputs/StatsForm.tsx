import React from 'react';
import type { Stats } from '../../types';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { FiCode, FiGitCommit, FiCoffee, FiClock, FiActivity, FiBox, FiUsers, FiUserCheck } from 'react-icons/fi';
import styles from './Forms.module.css';

interface StatsFormProps {
  stats: Stats;
  onChange: (key: keyof Stats, value: string) => void;
}

export const StatsForm: React.FC<StatsFormProps> = ({ stats, onChange }) => {
  return (
    <Card title="Your Stats" icon={<FiActivity />}>
      <div className={styles.grid}>
        <Input
          label="Lines of Code"
          icon={<FiCode />}
          value={stats.linesOfCode}
          onChange={(e) => onChange('linesOfCode', e.target.value)}
          placeholder="e.g. 25k+"
        />
        <Input
          label="Commits"
          icon={<FiGitCommit />}
          value={stats.commits}
          onChange={(e) => onChange('commits', e.target.value)}
          placeholder="e.g. 150+"
        />
        <Input
          label="Coffees Consumed"
          icon={<FiCoffee />}
          value={stats.beverages}
          onChange={(e) => onChange('beverages', e.target.value)}
          placeholder="e.g. 400+"
        />
        <Input
          label="Hours Coded"
          icon={<FiClock />}
          value={stats.hoursCoded}
          onChange={(e) => onChange('hoursCoded', e.target.value)}
          placeholder="e.g. 1000+"
        />
        <Input
          label="Bugs Fixed"
          icon={<FiActivity />} // pest icon not in feather? use Activity or similar
          value={stats.bugsFixed}
          onChange={(e) => onChange('bugsFixed', e.target.value)}
          placeholder="e.g. 186"
        />
         <Input
          label="Projects Shipped"
          icon={<FiBox />}
          value={stats.projectsShipped}
          onChange={(e) => onChange('projectsShipped', e.target.value)}
          placeholder="e.g. 10+"
        />
        <Input
          label="Hours in Meetings"
          icon={<FiUsers />}
          value={stats.meetingHours}
          onChange={(e) => onChange('meetingHours', e.target.value)}
          placeholder="e.g. 300+"
        />
        <Input
          label="Programmer Buddy"
          icon={<FiUserCheck />}
          value={stats.buddy}
          onChange={(e) => onChange('buddy', e.target.value)}
          placeholder="e.g. Co-pilot"
        />
      </div>
    </Card>
  );
};
