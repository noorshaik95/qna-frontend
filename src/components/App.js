import  React  from "react";
import { Router } from "react-router-dom";
import history from "../history";
import Routes from "./Routes";

class App extends React.Component {
    render() {
        return (
          <div>
            <Router history={history}>
                <Routes/>
            </Router>
          </div>
        );
    }
}

export default App;