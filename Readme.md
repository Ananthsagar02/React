//npm init
// package.json is the configuration for NPM, it keeps track of what versions of the package is install in our system

# we are using parcel in React why not webpack or vit --> All are same but they will do differently

# To install parcel for dependency

npm install -D parcel
// -D is dev dependency not normal dependency

"devDependencies": {
"parcel": "^2.13.3" //what is ^(caret) --> it will automatically update you to all future minor/patch versions
}

// package-lock.json --> it keeps a track of all the exact versions

// node_modules --> that stores third-party libraries and dependencies. It's essential for managing dependencies.

//npx--> is the executing the package
//npx parcel index.html

npm install react

npm install react-dom

# Parcel --

building single or multi-page React applications. It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies out of the box.

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- compress

// jsx --> html likes syntax
it is not html inside javascript
React is different and JSX is different

// JSX --> (transpiled before it reaches the js) - PARCEL - Babel
//Babel is a JavaScript compiler. · Put in next-gen JavaScript · Get browser-compatible JavaScript out ·
// Babel will convert the JSX code into React.Element

// JSX ==>Babel transpiles React.creatElement ==> ReactElement - JS Object ==> HTMLElement(render)

# React components

# Functional Component

- its a Normal javascript function which return some JSX

# props --> passing a arguments to the function

//src folder ==> source code

// Two types of Export/Import

1. export default name
2. import component from path;

- Named Export/Import ==> when we have export multiple things then use Named export
  export const component;
  import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState() ==> Superpowerful state Variables in React, scope is inside the component  -- it is called inside component and top and don't use inside if or for 
- useEffect() ==>
- useEffect is called after body is render or component is render

# useEffect //useEffect(2 params) - (callback function, [dependencies array])

 - if no dependency array ==> useEffect is called every component render.
 - if dependency array is empty [] ==> useEffect is called on initial render(just once).
 - if dependency array is [state] ==> useEffect is called everytime state is updated

# Re-render

 - whenever state variable updates or changes React will re-renders the components (or)
 - as soon as state variable updates React will re-render the component. very fast

# Virtal DOM

- REPRESENTATION OF ACTUAL DOM
- ACTUAL DOM ==> IS REACT ELEMENTS OR JAVASCRIPT OBJECT

# Why React is Fast

- because it as virtal DOM, diff algorithm which is very effeciency DOM manipulation

# Study react fiber

- React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

- Reconciliation - A high-level description of React's reconciliation algorithm.

# Rendering component

- it will call the component or function

# loads --> Render --> API --> Render

# Routing
