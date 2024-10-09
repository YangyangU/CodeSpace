import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    count: 1000,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>+1</button>
        <p>count：{this.state.count}</p>
      </div>
    );
  }
}
export default App
