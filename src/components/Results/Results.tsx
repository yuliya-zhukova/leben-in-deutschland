import classNames from 'classnames';

import { Link } from 'react-router-dom';

import { Question } from '../../data/questions';

import styles from './Results.module.css';

interface ResultsProps {
  answers: string[];
  questions: Question[];
}

export function Results(props: ResultsProps): JSX.Element {
  const { answers, questions } = props;

  return (
    <div>
      {questions.map(
        (question: Question): JSX.Element => {
          const isAnswerCorrect = answers.includes(question.correctAnswerId);
          const answerClass = classNames(styles.Answer, {
            [styles.AnswerCorrect]: isAnswerCorrect,
            [styles.AnswerIncorrect]: !isAnswerCorrect
          });

          return (
            <div key={question.id} className={answerClass}>
              {question.id} — {question.text}
            </div>
          );
        }
      )}
      <Link to="/">Start again</Link>
    </div>
  );
}
