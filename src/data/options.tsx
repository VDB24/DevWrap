import { 
  SiTypescript, SiPython, SiGo, SiC, SiCplusplus, SiOracle, 
  SiJavascript, SiSharp, SiRuby, SiSwift, SiKotlin, SiRust, 
  SiPhp, SiHtml5, SiCss3, SiReact, 
  SiSlack, SiGooglechrome, SiGooglemeet, 
  SiFigma, SiNotion, SiGithub, SiGitlab, SiDocker, 
  SiLeetcode, SiYoutube, SiSpotify, SiIntellijidea, SiJira 
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

// Helper to style icons - forcing WHITE as requested
const BrandIcon = (Icon: any) => 
  <Icon style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />;

export const TOOLS_OPTIONS = [
  { id: 'VS Code', icon: BrandIcon(VscVscode) },
  { id: 'Slack', icon: BrandIcon(SiSlack) },
  { id: 'Teams', icon: BrandIcon(FaMicrosoft) },
  { id: 'Chrome', icon: BrandIcon(SiGooglechrome) },
  { id: 'Meet', icon: BrandIcon(SiGooglemeet) },
  { id: 'Figma', icon: BrandIcon(SiFigma) },
  { id: 'Notion', icon: BrandIcon(SiNotion) },
  { id: 'GitHub', icon: BrandIcon(SiGithub) },
  { id: 'GitLab', icon: BrandIcon(SiGitlab) },
  { id: 'Docker', icon: BrandIcon(SiDocker) },
  { id: 'LeetCode', icon: BrandIcon(SiLeetcode) },
  { id: 'YouTube', icon: BrandIcon(SiYoutube) },
  { id: 'Spotify', icon: BrandIcon(SiSpotify) },
  { id: 'IntelliJ', icon: BrandIcon(SiIntellijidea) },
  { id: 'Jira', icon: BrandIcon(SiJira) },
];

export const LANGUAGE_OPTIONS = [
  { id: 'TypeScript', icon: BrandIcon(SiTypescript) },
  { id: 'Python', icon: BrandIcon(SiPython) },
  { id: 'Go', icon: BrandIcon(SiGo) },
  { id: 'C', icon: BrandIcon(SiC) },
  { id: 'C++', icon: BrandIcon(SiCplusplus) },
  { id: 'Java', icon: BrandIcon(SiOracle) },
  { id: 'JavaScript', icon: BrandIcon(SiJavascript) },
  { id: 'C#', icon: BrandIcon(SiSharp) },
  { id: 'Ruby', icon: BrandIcon(SiRuby) },
  { id: 'Swift', icon: BrandIcon(SiSwift) },
  { id: 'Kotlin', icon: BrandIcon(SiKotlin) },
  { id: 'Rust', icon: BrandIcon(SiRust) },
  { id: 'PHP', icon: BrandIcon(SiPhp) },
  { id: 'HTML', icon: BrandIcon(SiHtml5) },
  { id: 'CSS', icon: BrandIcon(SiCss3) },
  { id: 'React', icon: BrandIcon(SiReact) },
];

import blackWidowUrl from '../assets/personalities/Black widow coding.png';
import batmanUrl from '../assets/personalities/batman coding.png';
import ironManUrl from '../assets/personalities/ironman coding.png';
import johnWickUrl from '../assets/personalities/john wick coding.png';
import spidermanUrl from '../assets/personalities/spider coding.png';
import spiderGwenUrl from '../assets/personalities/spider gwen coding.png';
import wonderWomanUrl from '../assets/personalities/wonderwoman coding.png';

export const PERSONALITY_OPTIONS = [
  { id: 'Black Widow', label: 'Black Widow', image: blackWidowUrl },
  { id: 'Batman', label: 'Batman', image: batmanUrl },
  { id: 'Iron Man', label: 'Iron Man', image: ironManUrl },
  { id: 'John Wick', label: 'John Wick', image: johnWickUrl },
  { id: 'Spiderman', label: 'Spiderman', image: spidermanUrl },
  { id: 'Spider Gwen', label: 'Spider Gwen', image: spiderGwenUrl },
  { id: 'Wonder Woman', label: 'Wonder Woman', image: wonderWomanUrl },
];
