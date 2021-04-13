import styles from '../styles/components/ExperienceBar.module.css';

export function ExperiencieBar() {
  return (
<header className={styles.experiencieBar}>
  <span>0 px</span>
  <div>
    <div style={{width:'50%'}}/>
    <span className={styles.currentExperiencie} style={{left:'50%'}} > 300xp</span>
  </div>
  <span>600 px</span>
</header>
  );
}