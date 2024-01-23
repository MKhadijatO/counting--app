import React from 'react';

class Counter extends React.Component { 
constructor(props) {
    super(props);
    this.state = {
        counter:0
    };
}


    handleAttack(){
    alert('Attack clicked');
}

handleDefence(){
    alert('Defence clicked');
}

    render() { 
        return (
            <div className='row '>
                <h1>Counter: {this.state.counter} </h1>
                <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                <button onClick={this.handleDefence}style={{width:"200px"}}>-1</button>
            </div>
        );
    };
};

export default Counter;