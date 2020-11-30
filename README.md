
# Overview
    This is my development project for Brown's UI UX course! The goal was to create 
    a "list of anything that aggregates for any purpose." My site contains a list of 
    animals that can be added to and removed from a stack, which displays their 
    cumulative height! Have fun!

# Components and their interactions with index/data passing
    
    - FavAdder
        - The button that adds the item to the stack (known as FavList in the code)
        - Takes in functions favTotal and addFavItem from index through ItemList
          and passes in item to be added to stack and to accumulator (stack height)
        - This component is used in ItemList, which creates the items from the 
          information in state

    - FavList
        - Creates the stack/FavList from the favorited/stacked items
        - Takes in the entries to be converted (state.favorites) and maps them
          to cards of their emoji, and the remove function from index.js

    - Filter
        - Creates the filter box in the top left corner that allows users to filter
          the animals/items by height and weight
        - Takes in index.js's filtHeightBy and filtWeightBy functions, which update the 
          and call helper functions that change state.currItems (the items/animal cards)
          that are displayed

    - Sorter
        - Creates the Sort By: box in the top left corner that allows users to sort the 
          animals by height, weight, and alphabetical order
        - Takes in index.js's sortHeight, sortWeight, and sortAZ functions

    - ItemList
        - Creates the middle section of the site, the cards of the animals, from the 
          items in state.currItems with map
        - Uses FavAdder to create "Stack" button on each card
        - Can be filtered and sorted by Filter and Sorter


# User Interactions & State
    
    - Filtering
        - Users can use the filter buttons to filter the item/animal cards by height and 
          weight 
        - This will update state.currItems to only include the desired items, which will
          then be reflected in the shown items/cards

    - Sorting
        - Users can use the sort buttons to reorder the item/animal cards by height, weight
          or alphabetical order
        - This will reorder the items in currItems to reflect the specified order, which will
          then be reflected in the shown cards

    - Adding to Stack
        - Users can use the "Stack" button on each animal/item card to add that animal to the 
          favorites stack, which is stored in state.favorites
        - This will just append the animal to state.favorites, which is reflected in the 
          FavList

    - Removing from Stack
        - Users can click on any animal/card in the stack/FavList to remove it
        - This will result in index.js's remove function removing any items with the clicked item's
          key in the FavList, which is then resulted in the shown animal stack




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
