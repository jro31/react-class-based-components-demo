import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
  // You can only connect a class-based component to one context
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [], // The initial state has no users (for example, if we need to fetch the users from a database)
      searchTerm: '',
    };
  };

  // 'componentDidMount()' is the class-based equivalent to 'useEffect()' without any dependencies (e.g useEffect(someFunction, [])) - It will run only once, after the component is first rendered
  componentDidMount() {
    // Sending imaginary http request...
    this.setState({ filteredUsers: this.context.users });
  };

  // 'componentDidUpdate()' is the class-based equivalent to using 'useEffect()' with dependencies
  // It will be called automatically by React whenever this component is re-evaluated, for example, when it's state changed
  // As this state change would cause 'componentDidUpdate()' to be called again, we would end-up in an infinite loop
  // We get around this by comparing the previous state to the current state, and only running setState() if they are different (as below)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({ filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)) })
    };
  };

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
};

export default UserFinder;
