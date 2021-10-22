import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false }
  }

  // 'componentDidCatch()' can be added to any class-based component, and makes that component an 'error boundary'
  // It cannot be added to functional components, and there is no functional component equivalent (at the moment)
  // 'componentDidCatch()' will be triggered whenever one of its child components throws an error
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>
    };
    return this.props.children;
  };
};

export default ErrorBoundary;

// Note that you will still see an error screen in development
// However, this is just an overlay that will not be shown in production (see the note at the bottom of the error screen)
// Click the 'X' in the top-right to close the overlay, and see what will be shown in production (the 'Something went wrong!' text)
