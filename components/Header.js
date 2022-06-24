import styles from '../styles/Home.module.css';
import AnimatedDev from './textComponents/AnimatedDev';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.Header}>
      <h1>
        GUSTAVO ANDRADE
      </h1>
      <p>
        {AnimatedDev()}
      </p>
      <h4>
        <Link href='/'>
          <a>
            HOME
          </a>
        </Link>
      </h4>
      <h4>
        <Link href='/portifolio'>
          <a>
            PORTIFOLIO
          </a>
        </Link>
      </h4>
      <h4>
        <Link href='/works'>
          <a>
            WORKS
          </a>
        </Link>
      </h4>
      <h4>
        <Link href='/profile'>
          <a>
            PROFILE
          </a>
        </Link>
      </h4>
      <h4>
        <Link href='/contact'>
          <a>
            CONTACT
          </a>
        </Link>
      </h4>
    </header>
  );
}
