import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';

function App() {
  return (
    <main>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    </main>
  );
}

export default App;
