# React Basics - Presentation

## Project Initialization

- [Create React apps with no build configuration](https://github.com/facebook/create-react-app)
- `npx` is npm package runner
- `npx create-react-app my-blog`

### File Structure

- Example component `App.js` (import svg, css just like anything else)
- Example test of the UI component at `App.test.js`, using [Jest](https://jestjs.io/docs/en/tutorial-react)
- Automatically wires Service Worker, which you avoid unless you know what you are doing
- `yarn.lock` dependency list (has global dependency cache, saves lots of time, parallelizes pretty well)

## JSON file as an API

- [json-server](https://github.com/typicode/json-server)