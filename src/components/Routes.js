import  React  from "react";
import {Route} from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import questions from "./questions";
import answers from "./answers";

const Routes = () => {
    return (
        <div>
            <Header/>
            <Route path={"/"} exact={true} component = {Home}/>
            <Route path={"/add-question"} component={questions.CreateQuestion}/>
            <Route path={"/edit-question"} component={questions.EditQuestion}/>
            <Route path={"/view-question"} component={questions.ViewQuestion}/>
            <Route path={"/questions"} component={questions.QuestionList}/>
            <Route path={"/add-answer"} component={answers.CreateAnswer}/>
            <Route path={"/edit-answer"} component={answers.EditAnswer}/>
        </div>
    );
};

export default Routes;