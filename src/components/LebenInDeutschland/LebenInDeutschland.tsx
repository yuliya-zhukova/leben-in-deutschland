import { Badge } from 'primereact/badge';

import { questions } from '../../data/questions';
import { TestLebenInDeutschland } from '../TestLebenInDeutschland/TestLebenInDeutschland';

export function LebenInDeutschland(): JSX.Element {
  return (
    <div>
      <h1>Leben in Deutschland</h1>
      <Badge value="42" />

      <TestLebenInDeutschland questions={questions} />
    </div>
  );
}
