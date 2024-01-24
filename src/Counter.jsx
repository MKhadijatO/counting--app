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
    
    
    /*** the second stait after execution waits for the value of the one above using the previousState***/
    this.setState((previousState)=>{
        return{
            count: previousState.count + 1,
        }
    });
  }

  handleDefence() {
    // alert('Defence clicked');
    this.setState((previousState)=>{
        return{
            count: previousState.count - 1,
        }
    });
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
