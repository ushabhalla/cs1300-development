import React, { Component } from "react";
import FavAdder from "./FavAdder";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";



class ItemList extends Component {
  createTask = item => {
    const classes = makeStyles(theme => ({
      root: {
        width: 345,
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
      },
      gridList: {
        width: "750px",
        height: "100%"
      }
    }));

    return (
      <GridListTile style={{ width: "250px", height: "auto" }}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia component="img" height={200} image={item.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Weight: {item.weight} lbs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Height: {item.height} in
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <FavAdder
              entries={item}
              favorites={this.props.favorites}
              favfun={this.props.favfun}
              totfun={this.props.totfun}
              keyGen={this.props.keyGen}
            />

            <Button size="small" color="primary" href={item.wiki}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </GridListTile>
    );
  };

  render() {
    const todoEntries = this.props.entries;
    const classes = makeStyles(theme => ({
      root: {
        width: 345,
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
      },
      gridList: {
        width: "10%",
        height: "100%"
      }
    }));
    const listItems = todoEntries.map(this.createTask);
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} style={{ width: "780px" }}>
          {listItems}
        </GridList>
      </div>
    );
  }
}

export default ItemList;
