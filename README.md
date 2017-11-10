# Vote Graph
Preview Here: https://gcr-vote-graph.surge.sh/

### Topics covered
- Redux (State, Actions, Reducers)

### Things to Notice
- reducers/index.js:
  - defines one reducer to determine initial state and state changes from actions.
  - uses action.type to determine what action it is
  - state is an immutable object
- actions/index.js:
  - has a function for each action type available.
- index.js: sets up store and wraps App in `<Provider>`.
- App.js: doesn't even deal with state or Redux.
- Graph.js: configured to get Redux state as props.
- ButtonBar.js: configured to get Redux actions as props.

### Steps to Build
1. Set up project with `create-react-app`.
2. Clear out the default styles and unneeded files. Bring in our CSS.
3. Install Redux `npm install redux --save`.
4. Install React-Redux `npm install react-redux --save`.
5. Create actions.
6. Create reducers with default state and action handlers to modify state.
7. In index.js, create the store and wrap `<App/>` with a `<Provider>`.
8. Create Graph component. Connect it to the Redux state.
9. Create ButtonBar component. Connect it to the Redux vote action.
10. Include both components in App.js.
