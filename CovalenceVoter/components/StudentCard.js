import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

export default class StudentCard extends Component {

    render() {
        return (
            <Card>
                <Text>First Name: {this.props.team.firstname}</Text>
                <Text>Last Name: {this.props.team.lastname}</Text>
                <Text>Phone: {this.props.team.phone}</Text>
                <Text>Email: {this.props.team.email}</Text>
            </Card>
        );
    }
}