import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";



// creates the favorite list from its input entries
class FavList extends Component {
  createTask = item => {
    const classes = makeStyles({
      root: {
        width: 345
      }
    });

    return (
      <Card className={classes.root} width="200px">
        <CardActionArea width={200} onClick={() => this.props.remove(item)}>
          <CardContent>
            <Typography variant="h1" component="p">
              {item.emoji}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  render() {
    const favEntries = this.props.entries;
    const listItems = favEntries.map(this.createTask);
    return <List>{listItems}</List>;
  }
}

export default FavList;
