import React, { Component } from "react";

import {
  Paper,
  Button,
  ButtonGroup
} from "@material-ui/core";


// creates the sorting component
class Sorter extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            this.props.sorthfun();
          }}
        >
          Height
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            this.props.sortwfun();
          }}
        >
          Weight
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => {
            this.props.sortazfun();
          }}
        >
          A-Z
        </Button>
        </ButtonGroup>
    );
  }
}

export default Sorter;
