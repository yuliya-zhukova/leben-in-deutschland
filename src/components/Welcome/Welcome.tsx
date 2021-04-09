import { Link } from 'react-router-dom';

export function Welcome(): JSX.Element {
  return (
    <div data-cy="Welcome">
      <h1>Test &quot;Leben in Deutschland&quot;</h1>
      <Link to="/test" data-cy="Welcome__start-test-link">
        Start
      </Link>
    </div>
  );
}
