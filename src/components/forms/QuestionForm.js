import React from "react";
import { Field, reduxForm } from "redux-form";
import {Form, Button, Message, Segment} from "semantic-ui-react";

class QuestionForm extends React.Component {
    renderInput({input, label, type, required, meta}) {
        let isError = meta && meta.error && meta.touched;
        if(type === "input") {
            return (
                <>
                    <Form.Input {...input} label={label} required={required} error={isError}/>
                    { isError && <Message floating error content={meta.error}/> }
                </>
            );
        } else if(type === "text") {
            return (
                <>
                    <Form.TextArea {...input} label={label} required={required} error={isError}/>
                    { isError && <Message error content={meta.error}/> }
                </>
            );
        }
    }
    onSubmit(formValues) {
        console.log(formValues)
    }
    render() {
        return (
            <Segment padding={"very"}>
                <Message
                    attached
                    success
                    header='Ask away!'
                    content='Fill out the form below and get answered'
                />
                <Form className="attached fluid segment" onSubmit={this.props.handleSubmit(this.onSubmit)} error>
                    <Field
                        name={"title"}
                        component={this.renderInput}
                        label={"Enter Title"}
                        type={"input"}
                        required={true}
                    />
                    <Field
                        name={"description"}
                        component={this.renderInput}
                        label={"Enter Description"}
                        type={"text"}
                        required={true}
                    />
                    <Button disabled={this.props.invalid} primary >Submit</Button>
                </Form>
            </Segment>
        );
    }
}

const validate = (formValues) => {
  const error= {};
  if(!formValues.title || formValues.title.trim() === "") {
      error.title = "Title is required";
  }
  if(!formValues.description || formValues.description.trim() === "") {
      error.description = "Description is required";
  }
  return error;
};


export default reduxForm({
    form: 'questionForm',
    validate
})(QuestionForm);