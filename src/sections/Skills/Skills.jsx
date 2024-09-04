import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Ruby" />
        <SkillList src={checkMarkIcon} skill="C" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="GraphQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skill="React Native" />
        <SkillList src={checkMarkIcon} skill="Flask" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Jenkins" />
      <SkillList src={checkMarkIcon} skill="Synopsys" />
      <SkillList src={checkMarkIcon} skill="Dynatrace" />
      <SkillList src={checkMarkIcon} skill="Sonarqube" />
      <SkillList src={checkMarkIcon} skill="Hashicorp Vault" />
      <SkillList src={checkMarkIcon} skill="Nexus Repository" />
      <SkillList src={checkMarkIcon} skill="NexusIQ" />
      <SkillList src={checkMarkIcon} skill="Red Hat Openshift" />
      <SkillList src={checkMarkIcon} skill="Kubernetes" />
      <SkillList src={checkMarkIcon} skill="Docker" />
      <SkillList src={checkMarkIcon} skill="Postman" />
      <SkillList src={checkMarkIcon} skill="MongoDB" />
      <SkillList src={checkMarkIcon} skill="PostgreSQL" />
      </div>
    </section>
  );
}

export default Skills;
