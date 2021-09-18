import { Route, Switch } from 'react-router';
import './App.css';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Layout from './components/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/user/:id'>
            <Profile/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
