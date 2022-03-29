import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Components
import Home     from "./screens/Home";
import Login    from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  // 강의 기준의 react-router-dom은 5.3.0 버전이어서 잠시 다운그레이드 함.
  // 나중에 6.0.0 기준 동작하는 방식으로 수정해보면 좋을듯

  const isLoggedIn = false;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
        { isLoggedIn ? <Home /> : <Login /> }
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );

  // 알수없는 url을 입력 받았을 경우 처리방안
  // 1. 404 Not found page를 표시 -> 이쪽이 사용자 입장에서는 편함
  // 2. Home page로 redirect
  // <Redirect to="/" />
}


export default App;
