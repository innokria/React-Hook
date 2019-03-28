import React from 'react';
import StyledButton from '../../styled/StyledButton'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  };

  setCount = (count) => {
    this.setState({
      count
    });
  };

  function () {
    console.log("hello thet");

  }
  

  render() {
    return (<div>
        <p>You clicked {this.state.count} times</p>
        <StyledButton onClick={() => this.setCount(this.state.count + 1)}>
          Increment
        </StyledButton>
        <div> helo world 


          </div>

        
      </div>
    );
  };
}