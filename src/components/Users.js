import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// Prior to React 16.8 (which introduced hooks) you could only manage state in class-based components (and not in functional components)
class Users extends Component {
  // The constructor is automatically called when this class is instantiated (whenever it gets used as a component)
  constructor() {
    super(); // When you add 'constructor()' to your class AND you extend another class ('extends Component' above) then you need to call 'super()', which calls the constructor of the parent (super) class
    this.state = {
      showUsers: true,
      anotherPieceOfState: 'Example',
    };
    // In class-based components, your state is ALWAYS an object (not a string, boolean, array etc).
    // It also HAS TO be a property named 'state', and you can only have one state object (which contains all the different 'pieces' of state)
  };

  toggleUsersHandler() {
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
    // setState always takes an object (and if it uses the current state (as here), it should be a function, which returns an object)
    // However, it WON'T OVERRIDE THE EXISTING STATE
    // Instead it will merge your new state object with the existing state object
    // So, for example, 'this.setState({ someNewState: 'WTF?' })' would update the state (as set in the constructor) to be:
    // { showUsers: true, anotherPieceOfState: 'Example', someNewState: 'WTF?' }
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}> {/* Passing 'this' as an argument with bind, ensures that in the 'togglerUsersHandler' function, 'this' refers to the surrounding class (it otherwise wouldn't) */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  };
};

export default Users;
