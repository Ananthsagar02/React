import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "headclass",
//     xyz: "abc",
//   },
//   "Hello world!.."
// );

//console.log(heading); //object

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "h1" }, "H1 Heading"),
//     React.createElement("h2", { id: "h2" }, "H2 Heading"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "h12" }, "H1 my ..React"),
//     React.createElement("h2", { id: "h22" }, "H2 Heading"),
//   ]),
// ]);

//console.log(parent);

//const rootp = ReactDOM.createRoot(document.getElementById("root"));
//rootp.render(parent);

// JSX  -->  (transpiled before it reaches the js) - PARCEL - Babel
//Babel is a JavaScript compiler. · Put in next-gen JavaScript · Get browser-compatible JavaScript out ·
// Babel will convert the JSX code into React.Element

// JSX ==> React.creatElement ==> ReactElement - JS Object ==> HTMLElement(render)

// Functional Component --> its a Normal javascript function which return some JSX

// const Title = function () {
//   return (
//     <h1 id="heading" className="jsx" tabIndex="5">
//       React using JSX ☄️
//     </h1>
//   );
// }; // This is JSX not HTML

// const varr = 1000;
// const HeadingComponent = () => {
//   return (
//     <div className="cont">
//       <Title />
//       <Title />
//       {Title()}
//       <h1>{varr}</h1>
//       <h1> React Functional Component</h1>
//     </div>
//   );
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />); //render --> takes tha heading object converted into H1 tag putup in the DOM
