import { Button } from 'primereact/button';

import { Answer, Question } from '../../data/questions';

import styles from './TestStep.module.css';

interface TestStepProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

export function TestStep(props: TestStepProps): JSX.Element {
  const { question, onAnswer } = props;

  return (
    <div data-cy="TestStep" className={styles.TestStep}>
      <div className={styles.TestStepHeader}>
        <h3>
          <span className={styles.QuestionId}>{question.id}.&ensp;</span>
          {question.text}
        </h3>
      </div>
      {question.answers.map(
        (answer: Answer): JSX.Element => (
          <Button
            key={answer.id}
            label={answer.text}
            className={`p-button-rounded p-button-outlined ${styles.TestStepAnswerButton}`}
            onClick={() => onAnswer(answer.id)}
            data-cy="TestStep__answer"
          />
        )
      )}
    </div>
  );
}
