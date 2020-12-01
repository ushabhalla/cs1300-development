import React, { Component } from "react";

import { FormControl, Button } from "@material-ui/core";

class FavAdder extends Component {
  
  // adds the item to the list of favorites
  addfav = () => {
    let newItem = { ...this.props.entries };
    newItem.key = this.props.keyGen();
    const favorites = [...this.props.favorites, newItem];
    this.props.favfun(favorites);
    this.props.totfun(newItem.height);
  };

  render() {

    return (
      <FormControl margin="normal">
        <form>
          <Button color="primary" variant="contained" size="small" onClick={this.addfav}>
            Stack
          </Button>
        </form>
      </FormControl>
    );
  }
}

export default FavAdder;
