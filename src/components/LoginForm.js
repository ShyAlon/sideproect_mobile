/* eslint-disable react/require-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPressed() {
        this.props.loginUser(this.props);
    }

    renderError() {
        return this.props.error ? (
            <View style={{ backgroundColor: 'white' }}>
                <Text>
                    {this.props.error}
                </Text>
            </View>
        ) : <View />;
    }

    renderButton() {
        return this.props.loading ? (
            <Spinner />
        ) : (
                <Button onPress={this.onButtonPressed.bind(this)}>
                    Login
                    </Button>
            );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="12345"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);
