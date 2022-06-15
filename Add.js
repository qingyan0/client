import React from "react";
import { Button, ButtonGroup } from "@mui/material";




class Inventory extends React.Component {
    state = { counter: 2 };
  
    handleIncrement = () => {
      this.setState(state => ({ counter: state.counter + 1 }));
    };
  
    handleDecrement = () => {
      this.setState(state => ({ counter: state.counter - 1 }));
    };
    render() {
      const displayCounter = this.state.counter > 0;
  
      return (
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={this.handleIncrement} variant="contained" color="primary">+</Button>
          {displayCounter && <Button disabled>{this.state.counter}</Button>}
          {displayCounter && <Button onClick={this.handleDecrement} variant="contained" color="primary">-</Button>}
        </ButtonGroup>
      );
    }
  }
  
  export default Inventory;