import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon,
    GridColumn
} from "semantic-ui-react";

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: []
    };

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = { message: "hay campos vacios" };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: "La clave es invalida" };
            this.setState({ errors: errors.concat(error) });
            return false;
        }

        return true;
    };

    isPasswordValid = ({ password, confirmPassword }) => {
        if (password.length < 6 || confirmPassword.length < 6) {
            return false;
        } else if (password !== confirmPassword) {
            return false;
        }
        return true;
    };

    isFormEmpty = ({ name, email, password, confirmPassword }) => {
        return (
            !name.length ||
            !email.length ||
            !password.length ||
            !confirmPassword.length
        );
    };

    displayErros = err => {
        return err.map((error, i) => <p key={i}> {error.message} </p>);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        if (this.isFormValid()) {
            try {
                const user = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        this.state.email,
                        this.state.password
                    );
                console.log(user);
            } catch (error) {
                console.error(error);
            }
        }
    };

    render() {
        const { name, email, password, confirmPassword, errors } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" icon color="orange" textAlign="center">
                        <Icon name="question circle" color="orange" />
                        Registro
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                type="text"
                                name="name"
                                icon="user"
                                iconPosition="left"
                                placeholder="Nombre de usuario"
                                value={name}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                type="email"
                                name="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="Correo"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                type="password"
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Clave"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                fluid
                                type="password"
                                name="confirmPassword"
                                icon="repeat"
                                iconPosition="left"
                                placeholder="Confirmar Clave"
                                value={confirmPassword}
                                onChange={this.handleChange}
                            />
                            <Button color="orange" fluid size="large">
                                Enviar
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErros(errors)}
                        </Message>
                    )}
                    <Message>
                        Ya estas registrado? <Link to="/login">Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;
