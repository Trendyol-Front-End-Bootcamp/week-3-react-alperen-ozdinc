import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/character/:id" component={CharacterDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
