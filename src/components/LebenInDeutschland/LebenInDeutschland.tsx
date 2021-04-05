import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { questions } from '../../data/questions';
import { TestLebenInDeutschland } from '../TestLebenInDeutschland/TestLebenInDeutschland';

export function LebenInDeutschland(): JSX.Element {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <h1>Leben in Deutschland</h1>

        <Switch>
          <Route exact path="/lorem">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              adipisci perferendis at quae illum, optio nam fugiat molestias
              mollitia nihil corrupti, numquam laboriosam, soluta voluptatum
              exercitationem illo id officia nobis.
            </p>
          </Route>
          <Route exact path="/">
            <TestLebenInDeutschland questions={questions} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}
