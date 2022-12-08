import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
