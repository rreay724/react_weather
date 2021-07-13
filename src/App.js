import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loading } from "./components/index";
import * as ROUTES from "./constants/routes";

const Main = lazy(() => import("./pages/main"));
const WeatherPage = lazy(() => import("./pages/weatherSearchPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path={ROUTES.WEATHER_SEARCH_PAGE} component={WeatherPage} />
            <Route path={ROUTES.MAIN_PAGE} component={Main} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
