import React from 'react';

class Bomb extends React.Component {
   constructor(props) {
    super()

    this.state = {
        secondsLeft: props.initialCount
    }
   }

    render() {
      const msg = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    //     if (secondsLeft === 0) {
    //         return 'Boom!'
    //     }
    // <h1>${this.state.secondsLeft} before I go boom!</h1>
    return (
       <div>{msg}</div>
    )
}
}

export default Bomb;