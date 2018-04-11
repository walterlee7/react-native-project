import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { StackNavigator } from 'react-navigation';
import ProjectTabScreen from './screens/ProjectTabScreen';

const RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    ProjectTab: { screen: ProjectTabScreen }
}, {
        initialRouteName: 'Home'
    });

export default class App extends Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}


