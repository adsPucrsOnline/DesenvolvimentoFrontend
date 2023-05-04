import React, { Component } from 'react';

class Gancho extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className='container'>
        <h1>Contador: {this.state.count}</h1>
        <button
 className='btn btn-primary'         
         onClick={() => this.handleIncrement()}>
            Incrementar         
         </button>
      </div>
    );
  }
}

export default Gancho;
