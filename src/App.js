import React, { Component } from 'react';

import './App.css';
import imgA from './success.png';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting`)
        .then(response => response.json())
        .then(state => this.setState(state));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">프록시 서버를 연결한 후 확인을 눌러주세요 </label>
              <button type="submit">확인</button>
            </form>
            {this.state.result && <p>웹팩 개발 환경 구축 완성!!!<img src={imgA} /> </p>}
          </header>
        </div>
    );
  }
}

export default App;
