import React, { Component } from 'react';
import Button from './components/button';

class App extends Component {

  /*
    button props

    value: string
    size: string(sm, lg)
    title: string
    color: string (outline, primary, danger, gray, light-grey)
    loading: bool
    disabled: bool
  */

  render() {
    return (
      <div>
        <Button
          value="Button"
          size="lg"
          title="Large"
          color="danger"
        />
      </div>
    );
  }
}

export default App;
