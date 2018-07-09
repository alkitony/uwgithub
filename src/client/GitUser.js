import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import './GitUser.css';


class GitUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      onHover: !state.onHover
    };
  }

  render() {
    const { avatar_url, login } = this.props;
    const { onHover } = this.state;
    return (
      <div
        className="col-sm-4 border-div"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <li>
          <img src={avatar_url} alt={login} />
          {onHover && <span>'text is over'</span>}
        </li>
      </div>
    );
  }
}

export default GitUser;
