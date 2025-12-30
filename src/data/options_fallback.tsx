
import React from 'react';
import { 
  SiTypescript, SiPython, SiGo, SiC, SiCplusplus, SiOracle, 
  SiJavascript, SiCsharp, SiRuby, SiSwift, SiKotlin, SiRust, 
  SiPhp, SiHtml5, SiCss3, SiReact, 
  SiVisualstudiocode, SiSlack, SiGooglechrome, SiGooglemeet, 
  SiFigma, SiNotion, SiGithub, SiGitlab, SiDocker, 
  SiLeetcode, SiYoutube, SiSpotify, SiIntellijidea, SiJira 
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';

// Helper to style icons with their brand colors
const BrandIcon = (Icon: any, color: string) => 
  <Icon style={{ color: color, width: '24px', height: '24px' }} />;

export const TOOLS_OPTIONS = [
  { id: 'VS Code', icon: BrandIcon(SiVisualstudiocode, '#007ACC') },
  { id: 'Slack', icon: BrandIcon(SiSlack, '#4A154B') },
  { id: 'Teams', icon: BrandIcon(FaMicrosoft, '#6264A7') },
  { id: 'Chrome', icon: BrandIcon(SiGooglechrome, '#4285F4') },
  { id: 'Meet', icon: BrandIcon(SiGooglemeet, '#00897B') },
  { id: 'Figma', icon: BrandIcon(SiFigma, '#F24E1E') },
  { id: 'Notion', icon: BrandIcon(SiNotion, '#000000') },
  { id: 'GitHub', icon: BrandIcon(SiGithub, '#181717') },
  { id: 'GitLab', icon: BrandIcon(SiGitlab, '#FC6D26') },
  { id: 'Docker', icon: BrandIcon(SiDocker, '#2496ED') },
  { id: 'LeetCode', icon: BrandIcon(SiLeetcode, '#FFA116') },
  { id: 'YouTube', icon: BrandIcon(SiYoutube, '#FF0000') },
  { id: 'Spotify', icon: BrandIcon(SiSpotify, '#1DB954') },
  { id: 'IntelliJ', icon: BrandIcon(SiIntellijidea, '#000000') },
  { id: 'Jira', icon: BrandIcon(SiJira, '#0052CC') },
];

export const LANGUAGE_OPTIONS = [
  { id: 'TypeScript', icon: BrandIcon(SiTypescript, '#3178C6') },
  { id: 'Python', icon: BrandIcon(SiPython, '#3776AB') },
  { id: 'Go', icon: BrandIcon(SiGo, '#00ADD8') },
  { id: 'C', icon: BrandIcon(SiC, '#A8B9CC') },
  { id: 'C++', icon: BrandIcon(SiCplusplus, '#00599C') },
  { id: 'Java', icon: BrandIcon(SiOracle, '#F80000') }, // Java often uses Oracle or Coffee cup
  { id: 'JavaScript', icon: BrandIcon(SiJavascript, '#F7DF1E') },
  { id: 'C#', icon: BrandIcon(SiCsharp, '#239120') },
  { id: 'Ruby', icon: BrandIcon(SiRuby, '#CC342D') },
  { id: 'Swift', icon: BrandIcon(SiSwift, '#F05138') },
  { id: 'Kotlin', icon: BrandIcon(SiKotlin, '#7F52FF') },
  { id: 'Rust', icon: BrandIcon(SiRust, '#000000') },
  { id: 'PHP', icon: BrandIcon(SiPhp, '#777BB4') },
  { id: 'HTML', icon: BrandIcon(SiHtml5, '#E34F26') },
  { id: 'CSS', icon: BrandIcon(SiCss3, '#1572B6') },
  { id: 'React', icon: BrandIcon(SiReact, '#61DAFB') },
];

export const PERSONALITY_OPTIONS = [
  { id: 'Black Widow', label: 'Black Widow', image: '/assets/personalities/Black widow coding.png' },
  { id: 'Batman', label: 'Batman', image: '/assets/personalities/batman coding.png' },
  { id: 'Iron Man', label: 'Iron Man', image: '/assets/personalities/ironman coding.png' },
  { id: 'John Wick', label: 'John Wick', image: '/assets/personalities/john wick coding.png' },
  { id: 'Spiderman', label: 'Spiderman', image: '/assets/personalities/spider coding.png' },
  { id: 'Spider Gwen', label: 'Spider Gwen', image: '/assets/personalities/spider gwen coding.png' },
  { id: 'Wonder Woman', label: 'Wonder Woman', image: '/assets/personalities/wonderwoman coding.png' },
];
