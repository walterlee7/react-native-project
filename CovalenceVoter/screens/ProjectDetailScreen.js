import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import StudentCard from '../components/StudentCard';

export default class ProjectDetailScreen extends Component {

    constructor(props) {
        super(props);
        this.project = this.props.screenProps.project;
        this.state = {
            teams: [],
        };
    }

    async componentDidMount() {

        let teams = await this.fetchTeams();
        this.setState({ teams: teams[0] });
    }

    async fetchTeams() {

        try {
            let result = await fetch({ url: `https://gravity.covalence.io/api/graduation/teams/${this.project.id}` });
            let teams = await result.json();
            return teams;
        } catch (e) {
            console.log(e);
            return;
        }
    }

    render() {
        return (
            <ScrollView>
                <Text>{this.project.id}</Text>
                <Text>{this.project.description}</Text>
                {this.state.teams.map((team, index) => {
                    return <StudentCard key={index} team={team} />
                })}

            </ScrollView>)

    }
}