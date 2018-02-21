import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { StackNavigator } from 'react-navigation';
import ProjectDetailScreen from './components/ProjectDetailScreen';

const RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    ProjectDetail: { screen: ProjectDetailScreen }
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


