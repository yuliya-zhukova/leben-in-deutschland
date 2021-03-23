import { questions } from '../../data/questions';
import { TestLebenInDeutschland } from '../TestLebenInDeutschland/TestLebenInDeutschland';

export function LebenInDeutschland(): JSX.Element {
  return (
    <div>
      <h1>Leben in Deutschland</h1>
      <TestLebenInDeutschland questions={questions} />
    </div>
  );
}
