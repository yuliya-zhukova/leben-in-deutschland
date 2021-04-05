import { Link } from 'react-router-dom';

export function Welcome(): JSX.Element {
  return (
    <div>
      <h1>Test &quot;Leben in Deutschland&quot;</h1>
      <Link to="/test">Start</Link>
    </div>
  );
}
