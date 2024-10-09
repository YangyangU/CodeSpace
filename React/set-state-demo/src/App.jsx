import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class App extends React.Component {
  state = {
    count: 1000,
  };

  handleClick = () => {
    const fans = Math.floor(Math.random() * 10);
    setTimeout(() => {
      console.log("宏任务触发");
      Promise.resolve().then(() => {
        console.log("微任务触发");
      });
      this.setState(
        {
          count: this.state.count + fans,
        },
        () => {
          console.log("新增粉丝数:", fans);
        }
      );
    });
  };
  componentDidMount() {
    const fans = Math.floor(Math.random() * 10);
    setTimeout(() => {
      console.log("宏任务触发");
    })
    Promise.resolve().then(() => {
      console.log("微任务触发");
    });
    this.setState(
      {
        count: this.state.count + fans,
      },
      () => {
        console.log("新增粉丝数:", fans);
      }
    );
    console.log("tongbu任务触发");
  }

  render() {
    return (
      <div className="App">
        <img
          src={reactLogo}
          alt="logo"
          className="App-logo"
          onClick={this.handleClick}
        />
        <p>我的关注人数：{this.state.count}</p>
      </div>
    );
  }
}

export default App;
