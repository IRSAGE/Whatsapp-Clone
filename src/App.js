
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    //BEM Maming Convestion
    <div className="app">
     
      <div className="app__body">
        <Router>
        <Sidebar />
          <Switch>

            <Route path="/rooms/:id">
            <Chat />
            </Route>
            <Route path="/">
              {/*<Chat />*/}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
