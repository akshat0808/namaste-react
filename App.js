import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );

// console.log(heading);

// JSX -> (babel tanspiles it to ->) React.createElement -> ReactElement - JS Object -> HTMLElement(render)

// React Element
// how to write jsx in react
const jsxHeading = (
  <div>
    <h1 className="heading" tabIndex="5">
      Hello World from JSX (react element)!!!!!!
    </h1>
    {3300330033}
    <h2>{10020020}</h2>
  </div>
  //   we can use react element in react element like this
  //   {reactElement}
  //   we can use ReactComponent in react element like thise
  //   <ReactComponent/>
);

// REact Component
// functional component
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React from functional component</h1>;
// };
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Hello World from React component!!!!!!
  </h1>
);

const Component = () => (
  <h1 className="component">
    I am 2nd Component showing component composition
  </h1>
);
const number = "12345";
const HeadingComponent = () => (
  <div id="container">
    {/* component composition */}
    <Title />
    {/* also like this  */}
    {Title()}
    <Component />
    {/* also like this  */}
    <Component></Component>
    {/* using JS code in JSX it comes out as HTML code */}
    <h2>{100 + 100}</h2>
    <h3>{number}</h3>
    {/* using react element in jsx */}
    {jsxHeading}
    <h1 className="heading">Namaste React from functional component!!!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
