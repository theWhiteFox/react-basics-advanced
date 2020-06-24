// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Create a react component
class App extends React.Component {

  // babel creates the constructor
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Err: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request" />
  }

  // React says we have to define render !!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

// Take the react component and display it
ReactDOM.render(< App />, document.querySelector('#root'));