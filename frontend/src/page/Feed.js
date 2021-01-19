import React from 'react';
import './Feed.css';
import { PostCont } from './post.js'

class Feed extends React.Component 
{  

    constructor(props) {
      super(props);
  
      // An array of social media posts messages, and we'll increment nextID
      // to maintain a unique ID for each post in our array
      this.state = {posts: [],nextID: 0,
                    low: true,
                    medium: true,
                    high: true,
                    critical: true,
                    fire: true,
                    flood: true,
                    power: true,
                    medical: true,
                };
      
    }
    fliplow() { this.setState({low: !this.state.low  }); }
    flipmedium() { this.setState({medium: !this.state.medium  }); }
    fliphigh() { this.setState({high: !this.state.high  }); }
    flipcritical() { this.setState({critical: !this.state.critical  }); }
  
    flipfire() { this.setState({fire: !this.state.fire  }); }
    flipflood() { this.setState({flood: !this.state.flood  }); }
    flippower() { this.setState({power: !this.state.power  }); }
    flipmedical() { this.setState({medical: !this.state.medical  }); }
    
    // Output all the posts into a table
    render() {
      var toshow = this.props.posts;
  
      // if the checkbox is checked, filter the array... 
      if (!this.state.low) toshow = toshow.filter( x => x.priority !== "Low" );
      if (!this.state.medium) toshow = toshow.filter( x => x.priority !== "Medium" );
      if (!this.state.high) toshow = toshow.filter( x => x.priority !== "High" );
      if (!this.state.critical) toshow = toshow.filter( x => x.priority !== "Critical" );
  
      if (!this.state.fire) toshow = toshow.filter( x => x.problem !== "Fire" );
      if (!this.state.flood) toshow = toshow.filter( x => x.problem !== "Flood" );
      if (!this.state.power) toshow = toshow.filter( x => x.problem !== "Power" );
      if (!this.state.medical) toshow = toshow.filter( x => x.problem !== "Medical" );
  
      return (
        <div class="container">
        <br/ >

        <div class="one">
        <h2>Filter type</h2>
        <br/ >
        <br/ >
        <h3>Problem</h3>
          <input type="checkbox" id="low" checked={this.state.low} 
                     onChange={this.fliplow.bind(this)} />    
          <label for="low"><span>Low</span></label>
          <br/>
          <input type="checkbox" id="medium" checked={this.state.medium} 
                     onChange={this.flipmedium.bind(this)} />    
          <label for="medium"><span>Medium</span></label>
          <br/>
          <input type="checkbox" id="high" checked={this.state.high} 
                     onChange={this.fliphigh.bind(this)} />    
          <label for="high"><span>High</span></label>
          <br/>
          <input type="checkbox" id="critical" checked={this.state.critical} 
                     onChange={this.flipcritical.bind(this)} />    
          <label for="critical"><span>Critical</span></label>
          <br/>

          <br/>
          <h3>Priority</h3>
          <input type="checkbox" id="fire" checked={this.state.fire} 
                     onChange={this.flipfire.bind(this)} />    
          <label for="fire"><span>Fire</span></label>
          <br/>
          <input type="checkbox" id="flood" checked={this.state.flood} 
                     onChange={this.flipflood.bind(this)} />    
          <label for="flood"><span>Flood</span></label>
          <br/>
          <input type="checkbox" id="power" checked={this.state.power} 
                     onChange={this.flippower.bind(this)} />    
          <label for="power"><span>Power</span></label>
          <br/>
          <input type="checkbox" id="medical" checked={this.state.medical} 
                     onChange={this.flipmedical.bind(this)} />    
          <label for="medical"><span>Medical</span></label>
          </div>

          <div class = "two">
          {toshow.map( 
            ({name,image,content,problem,priority,id}) => 
              <div> 
                <PostCont
                  name = {name} 
                  post = {content}
                  problem = {problem}
                  priority = {priority}
                  image = {image} />
              </div> 
            )}
        </div>
        </div>
        
      );
    }
  }  



export default Feed;