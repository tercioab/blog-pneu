import { BrowserRouter, Route, Switch } from "react-router-dom"
import AllPosts from "./Blog/pages/allPosts"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={AllPosts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
