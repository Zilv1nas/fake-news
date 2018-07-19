# React Basics - Presentation

## Who uses?

- Facebook
- Twitter
- Netflix
- Inventi
- **Who doesn't?**

## Why?

- Simple APIs
- Different mental model, transformed how you think and build
- Robust community

Available on various platforms:
- Desktop
- Mobile (iOS, Android)
- Server (Node.js)
- React VR

## Pros / Cons
- Primarly concerned with View
- Additional libs for HTTP Calls, Routing and etc (i.e. Angular comes w/ batteries included)

## Project Initialization

- [Create React apps with no build configuration](https://github.com/facebook/create-react-app)
- `npx` is npm package runner
- `npx create-react-app fake-news`

### File Structure

- Example component `App.js` (import svg, css just like anything else)
- Example test of the UI component at `App.test.js`, using [Jest](https://jestjs.io/docs/en/tutorial-react)
- Automatically wires Service Worker, which you avoid unless you know what you are doing
- `yarn.lock` dependency list (has global dependency cache, saves lots of time, parallelizes pretty well)

## Tooling

### Eslint warnings

> [0]   Line 9:  Emojis should be wrapped in <span>, have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji

### React Dev Tools

- Chrome / Firefox extension

## JSON file as an API

- [json-server](https://github.com/typicode/json-server)

## React Internals

- [Virtual DOM](http://teropa.info/images/onchange_vdom_change.svg)
- Keys
- Class  / Function based components
- .bind(this) vs class member assignment
