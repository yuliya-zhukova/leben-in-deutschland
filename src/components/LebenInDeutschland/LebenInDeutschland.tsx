import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { questions } from '../../data/questions';
import { TestLebenInDeutschland } from '../TestLebenInDeutschland/TestLebenInDeutschland';
import { Welcome } from '../Welcome/Welcome';

export function LebenInDeutschland(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/test">
          <TestLebenInDeutschland questions={questions} />
        </Route>
        <Route exact path="/" component={Welcome} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
