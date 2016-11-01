const React = require('react');
const ReactDOM = require('react-dom')

console.log("React Object: ", React);

//when we're writing our React code, we're not actually touch the DOM. We are working with the
//virtual DOM which decides how and when to update the actual DOM. So with React we need to
//include  a library called React-Dom which will tell us where our React code connects to the
//actual DOM

//takes as arguments the element to be rendered and then the DOM element which it is appended to
// ReactDOM.render(<h1>YADA</h1>, document.querySelector('#app-container'));

//the creators of React decided to merge JSX and HTML so as to streamline the development process
//babel compiles JSX into normal javascript

//we can create constructors for react components using the createClass method

let HomeView = React.createClass({
  render: function(){
    //this render method needs to return a JSX element and can only return ONE TOP LEVEL ELEMENT
    //will recieve an error of 'Adjacent JSX elements must be wrapped in an enclosing tag'
    return (
            <div className='main'>
                <h3>On That React</h3>
                <p>Still on It</p>
                <NavView/>
                <FriendsListView/>
            </div>
           )
  }
})

let NavView = React.createClass({
  render: function(){
    return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Info</button>
            </div>
           )
  }
})

let FriendsListView = React.createClass({
  render: function(){
    return (
            <ul>
              <li>ChaChaChip</li>
              <li>DONNY</li>
              <li>Mr. NewKirk</li>
              <li>Laslow Renfrew</li>
              <li>Brett Stevens</li>
            </ul>
           )
  }
})

//using ReactDOM.render to show our homeview.
ReactDOM.render(<HomeView/>, document.querySelector('#app-container'));
