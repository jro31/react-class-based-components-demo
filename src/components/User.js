import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  // 'componentWillUnmount()' is equivalent to the useEffect clean-up function - It is called right before a component is unmounted (removed from the DOM)
  componentWillUnmount() {
    console.log('User will unmount!'); // Outputs (three times; once for each user) whenever the 'Hide Users' button is clicked, as the corresponding state update (in the 'Users' component) means that this 'User' component is removed from the DOM
  };

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  };
};

export default User;
