import { ProgressBar } from 'primereact/progressbar';

import { useState } from 'react';

import { Question } from '../../data/questions';
import { Results } from '../Results/Results';
import { TestStep } from '../TestStep/TestStep';

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

  const displayValueTemplate = (value: number) => {
    return (
      <>
        {(value * 5) / 100}/<b>5</b>
      </>
    );
  };

  return (
    <div className="lid-container" data-cy="TestLebenInDeutschland">
      {hasFinished() ? (
        <Results answers={userAnswers} questions={questions} />
      ) : (
        <>
          <ProgressBar
            value={(step * 100) / 5}
            displayValueTemplate={displayValueTemplate}
          />
          <TestStep question={questions[step]} onAnswer={handleAnswer} />
        </>
      )}
    </div>
  );
}
