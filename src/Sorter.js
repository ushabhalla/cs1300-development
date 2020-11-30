import React, { Component } from "react";

import {
  Paper,
  Button,
} from "@material-ui/core";


// creates the sorting component
class Sorter extends Component {
  render() {
    return (
      <Paper>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.sorthfun();
          }}
        >
          Height
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.sortwfun();
          }}
        >
          Weight
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.sortazfun();
          }}
        >
          A-Z
        </Button>
      </Paper>
    );
  }
}

export default Sorter;
