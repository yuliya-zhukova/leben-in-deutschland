import { Button } from 'primereact/button';

import { Link } from 'react-router-dom';

import styles from './Welcome.module.css';

export function Welcome(): JSX.Element {
  return (
    <div data-cy="Welcome" className={`lid-container ${styles.Welcome}`}>
      <h1 className={styles.title}>
        Test
        <br />
        „Leben&nbsp;in&nbsp;Deutschland“
      </h1>
      <div className={styles.main}>
        <p>
          Answer 5 questions
          <br />
          to check your knowledge.
        </p>
      </div>
      <Link
        to="/test"
        data-cy="Welcome__start-test-link"
        className="lid-buttonAsLink"
      >
        <Button
          label="Start"
          className={`p-button-rounded ${styles.startButton}`}
        />
      </Link>
    </div>
  );
}
