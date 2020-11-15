
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import AccountPage from './components/pages/AccountPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/accountPage' exact component={AccountPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;