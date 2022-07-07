import React, { Component } from 'react';
import Greeting from './pure/greeting';
import GreetingF from './pure/greetingF';


class App extends Component {

  render() {
    return (
      <div>
        <Greeting titleApp="Esto es un componente clase"></Greeting>
        <GreetingF title="Esto es un componente de funcion"></GreetingF>
      </div>
    );
  }

}

export default App;
