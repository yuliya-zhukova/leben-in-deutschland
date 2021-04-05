import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { questions } from '../../data/questions';
import { TestLebenInDeutschland } from '../TestLebenInDeutschland/TestLebenInDeutschland';

export function LebenInDeutschland(): JSX.Element {
  const appRoot = process.env.PUBLIC_URL;

  return (
    <Router>
      <div>
        <h1>Leben in Deutschland</h1>

        <Switch>
          <Route path={`${appRoot}/lorem`}>
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              adipisci perferendis at quae illum, optio nam fugiat molestias
              mollitia nihil corrupti, numquam laboriosam, soluta voluptatum
              exercitationem illo id officia nobis.
            </p>
          </Route>
          <Route exact path={appRoot}>
            <TestLebenInDeutschland questions={questions} />
          </Route>
          <Redirect to={appRoot} />
        </Switch>
      </div>
    </Router>
  );
}
