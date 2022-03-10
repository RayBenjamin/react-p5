import {Route, Switch} from 'react-router-dom';
import Error from './Error/Error';
import FirstDrawing from "./FirstDrawing/FirstDrawing";
import './App.css';

function App() {

  return (
    <Switch>
        <Route 
          path="/"
          render={() => <FirstDrawing/>}
          exact />   
        <Route render={() => <Error />}/>          
    </Switch>
  )
}

export default App;
