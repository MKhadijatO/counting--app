import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      //state is immutable and unmodifiable
      count: 0,
    };
  }

  handleAttack() {
    // alert('Attack clicked');
 

    this.setState({ count: this.state.count + 100 });
    this.setState({ count: this.state.count + 10 }) // only this get executed 
  }

  handleDefence() {
    // alert('Defence clicked');
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="row ">
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.handleAttack} style={{ width: "200px" }}>
          +1
        </button>
        <button onClick={this.handleDefence} style={{ width: "200px" }}>
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
