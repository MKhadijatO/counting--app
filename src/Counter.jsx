import React from 'react';

class Counter extends React.Component { 
handleAttack(){
    alert('Attack clicked');
}

handleDefence(){
    alert('Defence clicked');
}

    render() { 
        return (
            <div className='row text-center'>
                <h1>Counter: </h1>
                <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                <button onClick={this.handleDefence}style={{width:"200px"}}>-1</button>
            </div>
        );
    };
};

export default Counter;