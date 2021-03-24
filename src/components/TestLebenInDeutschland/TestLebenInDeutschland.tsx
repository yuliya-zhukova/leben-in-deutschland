import { useState } from 'react';

import { Question } from '../../data/questions';
import { TestStep } from '../TestStep/TestStep';
import { Results } from '../Results/Results';

import styles from './TestLebenInDeutschland.module.css';

interface TestLebenInDeutschlandProps {
  questions: Question[];
}

export function TestLebenInDeutschland(
  props: TestLebenInDeutschlandProps
): JSX.Element {
  const { questions } = props;
  const [step, setStep] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  function hasFinished(): boolean {
    return questions.length === step;
  }

  function handleAnswer(answerId: string): void {
    setUserAnswers([...userAnswers, answerId]);

    if (!hasFinished()) {
      setStep(step + 1);
    }
  }

  return (
    <div data-cy="TestLebenInDeutschland">
      {hasFinished() ? (
        <Results answers={userAnswers} questions={questions} />
      ) : (
        <>
          <div className={styles.TestLebenInDeutschlandProgress}>
            Step {step + 1}/{questions.length}
          </div>
          <TestStep question={questions[step]} onAnswer={handleAnswer} />
        </>
      )}
    </div>
  );
}
