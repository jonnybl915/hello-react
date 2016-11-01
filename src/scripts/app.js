const React = require('react');
const ReactDOM = require('react-dom')
console.log(React);

//when we're writing our React code, we're not actually touch the DOM. We are working with the
//virtual DOM which decides how and when to update the actual DOM. So with React we need to
//include  a library called React-Dom which will tell us where our React code connects to the
//actual DOM

//takes as arguments the element to be rendered and then the DOM element which it is appended to
ReactDOM.render(<h1>YADA</h1>, document.querySelector('#app-container'));
