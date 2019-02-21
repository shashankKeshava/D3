import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

import "./styles.css";

const Reactangle = () => <rect width="100" height="200" x="50" y="20" />;

function D3blackbox(D3render) {
  return class BlackBox extends React.Component {
    componentDidMount() {
      D3render.call(this);
    }
    componentDidUpdate() {
      D3render.call(this);
    }
    render() {
      const { x, y } = this.props;
      return <g transform={`translate(${x},${y})`} ref="anchor" />;
    }
  };
}

class App extends Component {
  componentDidMount() {
    this.renderAxis();
  }
  // componentDidUpdate() {
  //   this.renderAxis();
  // }
  renderAxis = () => {
    const scale = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 200]);
    const axis = d3.axisBottom(scale);
    d3.select(this.refs.g).call(axis);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <svg>
          <g transform="translate(10, 30)" ref="g" />
        </svg>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
