import Avatar from '../src/assets/portrait.svg';
import styles from './index.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Avatar className={styles.avatar} />
      <h1 className={styles.title}>John-Bot</h1>
      <p>J-Bot for short. Life hacker. Here at your service.</p>
    </main>
  );
}
