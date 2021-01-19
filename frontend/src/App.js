import React from 'react';
import './App.css';
import Feed from './page/Feed.js';
import Analytics from './page/Analytics.js';
import Home from './page/Home.js';


import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
// Install the socket io client using:
//    npm install socket.io
//
// Then import socket io and create a socket:
//
import io from 'socket.io-client';
const socket = io('http://localhost:3001');
//
// See: https://socket.io/get-started/chat
//      https://www.npmjs.com/package/socket.io-client





class App extends React.Component {

  constructor(props) {
    super(props);

    // An array of social media posts messages, and we'll increment nextID
    // to maintain a unique ID for each post in our array
    this.state = {posts: [],nextID: 0,
              };
    // We can setup the event handlers for the messages in the constructor...
    socket.on('connect', function(){

      console.log("Connect....");

      // When we receive a social media message, call setState and insert 
      // it into the array of posts
      socket.on('post', 

        function(data) {

          // Can uncomment this to see the raw data coming in...
          console.log("post: " + JSON.stringify(data));

          // increment the next unique ID, and put post data into the list of 
          // posts... use the '...' syntax to make this insertion easier:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
          this.setState( 
            {posts: [...this.state.posts,
                     {name: data.name, 
                      image: data.image, 
                      content: data.content, 
                      problem: data.problem,
                      priority: data.priority,
                      id: this.state.nextID}]
            ,nextID: this.state.nextID + 1} );
        }.bind(this));
        // ^^ Like other event handlers, we bind the callback function to the 
        // component so we can use setState        

    }.bind(this));
    // ^^ ... And same with the callback function for when a connection is made
    
  }

  // the main page of app

  render(){
    return(
        <Router>
          <div class="nav">

            <NavLink activeClassName="over" exact to="/">Home</NavLink>
            <NavLink activeClassName="over" to="/Feed" >Live Feed</NavLink>
            <NavLink activeClassName="over" to="/Analytics" >Analytics</NavLink>
            
          </div>

          <br/ >
          <br/ >
          <br/ >
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Feed">
              <Feed posts = {this.state.posts} />
            </Route>
            <Route path="/Analytics">
              <Analytics posts = {this.state.posts} />
            </Route>
            </Switch>
        </Router>
    )  
}
  
}

export default App;
