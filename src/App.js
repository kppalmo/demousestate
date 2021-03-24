import './App.css';
import { Counter } from './exampleCounter';
import { LessText } from './exampleTextHide';
import { LoginForum } from './exampleData';
import { ListOfThings } from './exampleList';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Link to="/lessTextPage"><button >lessTextPage</button></Link>
        </Switch>
        <Switch>
          <Link to="/counterPage"><button >CounterPage</button></Link>
        </Switch>
        <Switch>
          <Link to="/listPage"><button >CreateListPage</button></Link>
        </Switch>
        <Switch>
          <Link to="/loginPage"><button >LoginForum</button></Link>
        </Switch>
      

      <Route path="/lessTextPage">
      <LessText
      text={`This page is designed
      to show off some simple yet
      usefull examples of the react
      useState feature`}
      maxLength={35}/>    
      </Route>

      <Route path="/counterPage">
      <Counter/>
      </Route>

      <Route path="/listPage">
      <ListOfThings/>
      </Route>

      <Route path="/loginPage">
        <LoginForum/>
      </Route>
  
      
    </Router>  
    </div>
  );
}

export default App;
