const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const userList = require('./faker-data.json');
console.log("React Object: ", React);
console.log("userList: ", userList);
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
    console.log('userList props from HomeView', this.props.userDataList )
    //this render method needs to return a JSX element and can only return ONE TOP LEVEL ELEMENT
    //will recieve an error of 'Adjacent JSX elements must be wrapped in an enclosing tag'

    let greetingMsg = 'Welcom to React!';
    let otherMsg = 'other message'
    let jsxEnemyArray = this.props.userDataList.map(function(userObject, i) {
       return <ProfileView userDataObject={userObject} key={i} />
      // <li key={i}>
      //           <img src={`https://robohash.org/${userObject.name}`}/>{userObject.name}
      //       </li>
      console.log("User Object: ", userObject);
    })

     //***** We Can Nest Our Views So Easily!!!!!!!!
     //with curly braces we can reference outside variable.
    return (

            <div>
                <h3>On That React</h3>
                <p>Still on It</p>
                <h2>{greetingMsg}</h2>
                <NavView/>
                <h4>All My Frands...</h4>
                <FriendsListView/>
                <h4>All My Enemies...</h4>
                <ul>
                  {jsxEnemyArray}
                </ul>
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
    let friendsArrayOfObjects = [
         {email: 'Victor', row: 'middle'},
         {email: 'Jordan', row: 'middle'},
         {email: 'Will', row: 'middle'},
         {email: 'Michael', row: 'middle'},
         {email: 'Jon', row: 'middle'}
      ]

      let friendsArrayJSX = friendsArrayOfObjects.map(function(friendObj, i){
         return <ProfileView key={i} userDataObject={friendObj} />
      })

      return (
         <ul>
            {friendsArrayJSX}
         </ul>
      )

})


let ProfileView = React.createClass({
  render: function(){
    return <li>
              <img src={`https://robohash.org/${this.props.userDataObject.email}?size=70x70`}/> {this.props.userDataObject.email}
           </li>
  }
})
//using ReactDOM.render to show our homeview.
//ReactDOM.render(<HomeView/>, document.querySelector('#app-container'));

//data should enter our React application through something called props  which looks something like this
// fetching
// $.getJSON("https://randomuser.me/api?results=24").then(function(serverRes){
//    // rendering + passing the serverResponse as props (userDataList)
//    ReactDOM.render(<HomeView userDataList={serverRes.results} />, document.querySelector('#app-container') )
// })

ReactDOM.render(< HomeView userDataList={userList} />, document.querySelector('#app-container'));
