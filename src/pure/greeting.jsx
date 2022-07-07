import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

  myAge = 19;

  constructor(props) {
    super(props);

    this.state = {
      age: 25
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.titleApp}</h1>
        
        <p>
          Mi edad es: {this.state.age}
        </p>
        
        <button onClick={this.birtday}>
          Sumar edad del componente
        </button>

      </div>
    );
  }

  birtday = () => {
    this.setState((anterior)=>{
      return {
        age: anterior.age + 1
      }
    })
  }


}


Greeting.propTypes = {
  titleApp: PropTypes.string,
};


export default Greeting;
