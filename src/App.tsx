import { useState } from 'react';
import styles from './styles/App.module.css';
import { INITIAL_DATA, type WrappedData } from './types';
import { StatsForm } from './components/inputs/StatsForm';
import { MultiSelector } from './components/inputs/MultiSelector';
import { PersonalDetailsForm } from './components/inputs/PersonalDetailsForm';
import { ThemeSelector } from './components/inputs/ThemeSelector';
import { BackgroundSettingsForm } from './components/inputs/BackgroundSettingsForm';
import { PreviewSection } from './components/preview/PreviewSection';
import { TOOLS_OPTIONS, LANGUAGE_OPTIONS } from './data/options';

function App() {
  const [data, setData] = useState<WrappedData>(INITIAL_DATA);

  const updateStats = (key: keyof WrappedData['stats'], value: string) => {
    setData(prev => ({ ...prev, stats: { ...prev.stats, [key]: value } }));
  };

  const updateDetails = (key: keyof WrappedData['details'], value: any) => {
    setData(prev => ({ ...prev, details: { ...prev.details, [key]: value } }));
  };

  const updateTheme = (theme: WrappedData['theme']) => {
    setData(prev => ({ ...prev, theme }));
  };
  
  const updateBackground = (key: keyof WrappedData['background'], value: any) => {
    setData(prev => ({ ...prev, background: { ...prev.background, [key]: value } }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
      </div>

      <header className={styles.header}>
        <h1>Dev Wrap 2025</h1>
        <p>Create your personalized Software Engineer year in review</p>
      </header>
      
      <main className={styles.main}>
        <div className={styles.inputColumn}>
           <StatsForm stats={data.stats} onChange={updateStats} />
           
           <MultiSelector 
             title="Your Tools" 
             subtitle="Select up to 5"
             options={TOOLS_OPTIONS} 
             selected={data.tools} 
             onChange={(val) => setData(prev => ({ ...prev, tools: val }))}
             maxSelect={5}
           />
           
           <MultiSelector 
             title="Your Languages" 
             subtitle="Select up to 5"
             options={LANGUAGE_OPTIONS} 
             selected={data.languages} 
             onChange={(val) => setData(prev => ({ ...prev, languages: val }))}
             maxSelect={5}
           />
           
           <PersonalDetailsForm details={data.details} onChange={updateDetails} />
           
           <ThemeSelector currentTheme={data.theme} onChange={updateTheme} />
           
           <BackgroundSettingsForm settings={data.background} onChange={updateBackground} />
        </div>
        
        <div className={styles.previewColumn}>
           <PreviewSection data={data} />
        </div>
      </main>
      
      <footer className={styles.footer} style={{
        textAlign: 'center', 
        padding: '2rem 0', 
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '0.9rem',
        fontWeight: 500
      }}>
        Made with <span style={{ color: '#ef4444' }}>♥</span> by Vashisht DB
      </footer>
    </div>
  );
}

export default App;
