import { Answer, Question } from '../../data/questions';

import styles from './TestStep.module.css';

interface TestStepProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

export function TestStep(props: TestStepProps): JSX.Element {
  const { question, onAnswer } = props;

  return (
    <div data-cy="TestStep">
      <div className={styles.TestStepHeader}>
        {question.id} — {question.text}
      </div>
      {question.answers.map(
        (answer: Answer): JSX.Element => (
          <button
            type="button"
            key={answer.id}
            className={styles.TestStepAnswerButton}
            onClick={() => onAnswer(answer.id)}
            data-cy="TestStep__answer"
          >
            {answer.text}
          </button>
        )
      )}
    </div>
  );
}
