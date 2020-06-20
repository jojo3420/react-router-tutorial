import React, {Component} from 'react';

class MyComponent extends Component {

  constructor(props) {
    super(props);
  }

  handleGoHome = () => {
    this.props.history.push('/');
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  componentDidMount() {
      console.log('componentDidMount()');
      this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    const { handleGoHome, handleGoBack } = this;
    return (
      <div>
        <button onClick={handleGoHome}>go home</button>
        <button onClick={handleGoBack}>go back</button>
      </div>
    );
  }
}


export default MyComponent;

