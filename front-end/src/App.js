import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import AllPosts from "./Blog/pages/allPosts"

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path='/' component={AllPosts} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
