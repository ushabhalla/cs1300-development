import React, { Component } from "react";
import ReactDOM from "react-dom";

import ItemList from "./ItemList";
import FavList from "./FavList";
import Filter from "./Filter";
import Sorter from "./Sorter";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Paper, Typography, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";


class App extends Component {
  constructor() {
    super();
    this.state = {
      keyTot: 0,
      heightSort: "all",
      weightSort: "all",
      total: 0,
      favorites: [],
      currItems: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg",
          title: "goat",
          emoji: "🐐",
          wiki: "https://en.wikipedia.org/wiki/Goat",
          weight: 201,
          height: 35,
          h: "tall",
          w: "light"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/1200px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
          title: "camel",
          emoji: "🐪",
          wiki: "https://en.wikipedia.org/wiki/Camel",
          weight: 1021,
          height: 65,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg",
          title: "elephant",
          emoji: "🐘",
          wiki: "https://en.wikipedia.org/wiki/Elephant",
          weight: 10021,
          height: 121,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://images.theconversation.com/files/287629/original/file-20190812-71932-14cvwej.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
          title: "rat",
          emoji: "🐀",
          wiki: "https://en.wikipedia.org/wiki/Rat",
          weight: 0.5,
          height: 3,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/Flamingos_Laguna_Colorada.jpg",
          title: "flamingo",
          emoji: "🦩",
          wiki: "https://en.wikipedia.org/wiki/Flamingo",
          weight: 8,
          height: 48,
          h: "tall",
          w: "light"
        },
        {
          image:
            "https://cdn.mos.cms.futurecdn.net/QjG4kyPwQfWesZiXJbvmL5-1200-80.jpg",
          title: "dragon",
          emoji: "🐉",
          wiki: "https://en.wikipedia.org/wiki/Dragon",
          weight: 1508,
          height: 208,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://www.rd.com/wp-content/uploads/2019/07/shutterstock_1450023254-scaled.jpg",
          title: "lizard",
          emoji: "🦎",
          wiki: "https://en.wikipedia.org/wiki/Lizard",
          weight: 1,
          height: 5,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://www.treehugger.com/thmb/D34D4234OfW1nfOgr1BQAC2rFgg=/1000x667/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-990e51c0b8da4e839195b85ca92aed9f.jpg",
          title: "cow",
          emoji: "🐄",
          wiki: "https://en.wikipedia.org/wiki/Cow",
          weight: 1600,
          height: 65,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://www.sciencenews.org/wp-content/uploads/2020/08/080720_eg_cat-covid_feat-800x450.jpg",
          title: "cat",
          emoji: "🐈",
          wiki: "https://en.wikipedia.org/wiki/Cat",
          weight: 8,
          height: 9.5,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/22/14/spotted-horse.jpg",
          title: "horse",
          emoji: "🐎",
          wiki: "https://en.wikipedia.org/wiki/Snake",
          weight: 1200,
          height: 60,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://i.dailymail.co.uk/i/pix/2016/11/13/22/3A58C5B100000578-0-image-a-4_1479077223773.jpg",
          title: "snake",
          emoji: "🐍",
          wiki: "https://en.wikipedia.org/wiki/Snake",
          weight: 5,
          height: 8,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
          title: "dog",
          description: 6,
          emoji: "🐕",
          wiki: "https://en.wikipedia.org/wiki/Dog",
          weight: 50,
          height: 20,
          h: "short",
          w: "light"
        }
      ],
      items: [
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg",
          title: "goat",
          emoji: "🐐",
          wiki: "https://en.wikipedia.org/wiki/Goat",
          weight: 201,
          height: 35,
          h: "tall",
          w: "light"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/1200px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
          title: "camel",
          emoji: "🐪",
          wiki: "https://en.wikipedia.org/wiki/Camel",
          weight: 1021,
          height: 65,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1200px-African_Bush_Elephant.jpg",
          title: "elephant",
          emoji: "🐘",
          wiki: "https://en.wikipedia.org/wiki/Elephant",
          weight: 10021,
          height: 121,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://images.theconversation.com/files/287629/original/file-20190812-71932-14cvwej.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
          title: "rat",
          emoji: "🐀",
          wiki: "https://en.wikipedia.org/wiki/Rat",
          weight: 0.5,
          height: 3,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/Flamingos_Laguna_Colorada.jpg",
          title: "flamingo",
          emoji: "🦩",
          wiki: "https://en.wikipedia.org/wiki/Flamingo",
          weight: 8,
          height: 48,
          h: "tall",
          w: "light"
        },
        {
          image:
            "https://cdn.mos.cms.futurecdn.net/QjG4kyPwQfWesZiXJbvmL5-1200-80.jpg",
          title: "dragon",
          emoji: "🐉",
          wiki: "https://en.wikipedia.org/wiki/Dragon",
          weight: 1508,
          height: 208,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://www.rd.com/wp-content/uploads/2019/07/shutterstock_1450023254-scaled.jpg",
          title: "lizard",
          emoji: "🦎",
          wiki: "https://en.wikipedia.org/wiki/Lizard",
          weight: 1,
          height: 5,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://www.treehugger.com/thmb/D34D4234OfW1nfOgr1BQAC2rFgg=/1000x667/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__01__cow-in-pasture-990e51c0b8da4e839195b85ca92aed9f.jpg",
          title: "cow",
          emoji: "🐄",
          wiki: "https://en.wikipedia.org/wiki/Cow",
          weight: 1600,
          height: 65,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://www.sciencenews.org/wp-content/uploads/2020/08/080720_eg_cat-covid_feat-800x450.jpg",
          title: "cat",
          emoji: "🐈",
          wiki: "https://en.wikipedia.org/wiki/Cat",
          weight: 8,
          height: 9.5,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/22/14/spotted-horse.jpg",
          title: "horse",
          emoji: "🐎",
          wiki: "https://en.wikipedia.org/wiki/Snake",
          weight: 1200,
          height: 60,
          h: "tall",
          w: "heavy"
        },
        {
          image:
            "https://i.dailymail.co.uk/i/pix/2016/11/13/22/3A58C5B100000578-0-image-a-4_1479077223773.jpg",
          title: "snake",
          emoji: "🐍",
          wiki: "https://en.wikipedia.org/wiki/Snake",
          weight: 5,
          height: 8,
          h: "short",
          w: "light"
        },
        {
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
          title: "dog",
          description: 6,
          emoji: "🐕",
          wiki: "https://en.wikipedia.org/wiki/Dog",
          weight: 50,
          height: 20,
          h: "short",
          w: "light"
        }
      ],
      currentItem: {
        image: "",
        title: "",
        description: ""
      }
    };
  }

  // sets state.favorites to be the input favorites list
  addFavItem = favs => {
    const favorites = favs;
    this.setState({ favorites });
  };

  // updates the total height (state.total) by input tot
  favTotal = tot => {
    const total = this.state.total + tot;
    this.setState({ total });
  };

  // removes the item fom state.favorites by its key
  removeItem = item => {
    const favorites = this.state.favorites.filter(k => item.key !== k.key);
    this.setState({ favorites });
    this.favTotal(-1 * item.height);
  };

  // updates state and calls filter helpers
  filtHeightBy = s => {
    this.setState({ heightSort: s });
    if (this.state.weightSort === "all") {
      this.filterw(this.state.weightSort);
    }
    this.filterh(s);
  };

  // updates state and calls filter helpers
  filtWeightBy = s => {
    this.setState({ weightSort: s });
    if (this.state.heightSort === "all") {
      this.filterh(this.state.heightSort);
    }
    this.filterw(s);
  };

  // create next unique key for a favorite
  keyGen = () => {
    
    const keyTot = this.state.keyTot + 1;
    this.setState({ keyTot })
    return keyTot;
  };

  // sort state.currItems by height
  sortHeight = () => {
    console.log("sort by height");
    this.setState({
      currItems: this.state.currItems.sort(function(a, b) {
        return a.height - b.height;
      })
    });
  };

  // sort state.currItems by weight
  sortWeight = () => {
    console.log("sort by weight");
    this.setState({
      currItems: this.state.currItems.sort(function(a, b) {
        return a.weight - b.weight;
      })
    });
  };

  // sort state.currItems alphabetically
  sortAZ = () => {
    console.log("sort by az");
    this.setState({
      currItems: this.state.currItems.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      })
    });
  };

  // filter state.currItems by input height
  filterh = h => {
    if (h !== "all") {
      const currItems = this.state.currItems.filter(k => h === k.h);
      this.setState({ currItems });
    } else {
      const currItems = this.state.items;
      this.setState({ currItems });
    }
  };

  // filter state.currItems by input weight
  filterw = w => {
    if (w !== "all") {
      const currItems = this.state.currItems.filter(k => w === k.w);
      this.setState({ currItems });
    } else {
      const currItems = this.state.items;
      this.setState({ currItems });
    }
  };

  render() {
    return (
      <div>
        <Paper>
          <AppBar position="static" style={{ marginBottom: "10px" }}>
            <Toolbar>
              <Typography variant="h6">Stackimals!</Typography>
            </Toolbar>
          </AppBar>
          <Grid container direction="row" spacing={5}>
            <Grid item style={{ width: "300px" }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Sort By:
                      </Typography>
                      <Sorter
                        sorthfun={this.sortHeight}
                        sortwfun={this.sortWeight}
                        sortazfun={this.sortAZ}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Filter
                    filthfun={this.filtHeightBy}
                    filtwfun={this.filtWeightBy}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ItemList
                entries={this.state.currItems}
                favorites={this.state.favorites}
                favfun={this.addFavItem}
                totfun={this.favTotal}
                keyGen={this.keyGen}
              />
            </Grid>
            <Grid item>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Total Height: {this.state.total}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    <p style={{ width: "200px" }}>
                      Click on an animal to remove it from the stack!
                    </p>
                  </Typography>
                </CardContent>
              </Card>
              <FavList
                entries={this.state.favorites}
                remove={this.removeItem}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
