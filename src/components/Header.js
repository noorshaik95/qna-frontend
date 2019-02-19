import  React  from "react";
import {Header as UiHeader, Grid, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import history from "../history";

class Header extends React.Component {
    state = {
      isSignedIn: false
    };
    render() {
        return (
            <Grid style={{marginTop: '1px'}}>
                <Grid.Column floated ={"left"} verticalAlign={"middle"} width={6}>
                    <Link to={"/"}><UiHeader as={"h2"} content={"QnA Forum"} textAlign={"left"} icon={"question"}/></Link>
                </Grid.Column>
                <Grid.Column floated={"right"} verticalAlign={"middle"} width={2}>
                    { this.state.isSignedIn ? <Button content={"Logout"}/> : <Button content={"Sign In"} onClick={() => {history.push("/")}}/> }
                </Grid.Column>
            </Grid>
        );
    }
}

export default Header;