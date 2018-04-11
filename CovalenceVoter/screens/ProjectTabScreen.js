import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import ProjectDetailScreen from './ProjectDetailScreen';
import ProjectStudentsScreen from './ProjectStudentsScreen';

const TabNavigation = TabNavigator({
    ProjectDetail: { screen: ProjectDetailScreen },
    StudentScreen: { screen: ProjectStudentsScreen }
});

export default class ProjectTabScreen extends Component {

    static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.project.name })

    render() {
        return <TabNavigation screenProps={{ project: this.props.navigation.state.params.project }} />
    }
}