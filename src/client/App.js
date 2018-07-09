import React, { Component } from 'react';
import './app.css';
import GitUser from './GitUser';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitHubUsers: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:8080/api/getGitHubData', {
    })
      .then((res) => {
        if (!res) {
          if (res.status >= 400 && res.status < 500) {
            return res.json().then((data) => {
              const err = { errorMessage: data.message };
              throw err;
            });
          }
          const err = { errorMessage: 'Unable to connect to server. Please try again' };
          throw err;
        } else {
          return res.json().then((gitHubUsers) => {
            this.setState({ gitHubUsers: [...gitHubUsers] });
          });
        }
      });
  }

  render() {
    const gitUsers = this.state.gitHubUsers.map(props => (
      <GitUser key={props.id} avatar_url={props.avatar_url} login={props.login} />
    ));
    return (
      <div className="git-avatars row">
        { gitUsers }
      </div>
    );
  }
}
