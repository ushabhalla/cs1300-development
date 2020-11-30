import React, { Component } from "react";

import {
  Paper,
  ButtonGroup,
  Button,
  Typography
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// creates the filter component
class Filter extends Component {
  render() {
    const filthfun = this.props.filthfun;
    const filtwfun = this.props.filtwfun;
    return (
      <Paper>
        <List>
          <ListItem>
            <Typography gutterBottom variant="h5" component="h2">
              Filter:
            </Typography>
          </ListItem>
          <ListItem>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                onClick={() => {
                  filthfun("tall");
                }}
              >
                Tall
              </Button>
              <Button
                onClick={() => {
                  filthfun("short");
                }}
              >
                Short
              </Button>
              <Button
                onClick={() => {
                  filthfun("all");
                }}
              >
                All
              </Button>
            </ButtonGroup>
          </ListItem>
          <ListItem>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                onClick={() => {
                  filtwfun("heavy");
                }}
              >
                Heavy
              </Button>
              <Button
                onClick={() => {
                  filtwfun("light");
                }}
              >
                Light
              </Button>
              <Button
                onClick={() => {
                  filtwfun("all");
                }}
              >
                All
              </Button>
            </ButtonGroup>
          </ListItem>
          <ListItem>
            <Typography variant="caption" display="block" gutterBottom>
              <p>Note: Tall &gt;= 35 in and Heavy &gt;= 1000 lbs</p>
            </Typography>
          </ListItem>
        </List>
      </Paper>
    );
  }
}

export default Filter;
