import  React  from "react";
import { Form, Button, Segment, Grid, Divider, Header} from "semantic-ui-react"

const Home = () => {
    return(
        <Segment placeholder>
            <Grid columns={2} stackable textAlign = {"center"} divided>
                <Grid.Row verticalAlign= {"middle"}>
                    <Grid.Column verticalAlign= {"middle"}>
                        <Header>Sign Up</Header>
                        <Form size={"large"}>
                            <Form.Group widths={"equal"} unstackable={false}>
                                <Form.Input label={"Full Name"} placeholder={"Full Name"} />
                                <Form.Input label={"Email"} width={8} placeholder={"Email"} />
                            </Form.Group>
                            <Form.Group unstackable={false}>
                                <Form.Input label={"Password"}  type={"password"} placeholder={"Password"} />
                                <Form.Input label={"Re-Enter Password"} type={"password"} placeholder={"Re-Enter Password"} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Button>Cancel</Form.Button>
                                <Form.Button>Submit</Form.Button>
                            </Form.Group>
                        </Form>
                    </Grid.Column>

                    <Grid.Column>
                        <Header>Login</Header>
                        <Grid columns={2} stackable textAlign={"center"} mobile={16}>
                            <Grid.Row>
                                <Grid.Column verticalAlign={"middle"}>
                                        <Button size={"medium"} color={"google plus"}  icon={"google plus"} content={"Google"}/>
                                    <Divider hidden/>
                                    <Button size={"medium"} color="facebook" icon={"facebook"} content={"Facebook"} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form>
                                        <Form.Field>
                                            <Form.Input label={"E-mail"}  placeholder={"E-mail"} />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Input label={"Password"} type={"password"} placeholder={"Password"} />
                                        </Form.Field>
                                        <Button type="submit" content={"Submit"}/>
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default Home;