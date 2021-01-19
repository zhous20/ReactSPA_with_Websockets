import React from 'react';
import Table from 'react-bootstrap/Table'
import './Analytics.js'

class Analytics extends React.Component 
{  

    constructor(props) {
      super(props);
  
      // An array of social media posts messages, and we'll increment nextID
      // to maintain a unique ID for each post in our array
      this.state = {posts: [],nextID: 0,
                };
      
    }
    

    // Output all the posts into a table
    render() {
        var check = this.props.posts;

        let cLowFire = check.filter( x=>x.priority === "Low" && x.problem === "Fire").length;
        let cMedFire = check.filter( x=>x.priority === "Medium" && x.problem === "Fire").length;
        let cHighFire = check.filter( x=>x.priority === "Low" && x.problem === "Fire").length;
        let cCritFire = check.filter( x=>x.priority === "Critical" && x.problem === "Fire").length;
        let cFire = check.filter( x=>x.problem === "Fire").length;

        let cLowFlood = check.filter( x=>x.priority === "Low" && x.problem === "Flood").length;
        let cMedFlood = check.filter( x=>x.priority === "Medium" && x.problem === "Flood").length;
        let cHighFlood = check.filter( x=>x.priority === "High" && x.problem === "Flood").length;
        let cCritFlood = check.filter( x=>x.priority === "Critical" && x.problem === "Flood").length;
        let cFlood = check.filter( x=>x.problem === "Flood").length;

        let cLowPower = check.filter( x=>x.priority === "Low" && x.problem === "Power").length;
        let cMedPower = check.filter( x=>x.priority === "Medium" && x.problem === "Power").length;
        let cHighPower = check.filter( x=>x.priority === "High" && x.problem === "Power").length;
        let cCritPower = check.filter( x=>x.priority === "Critical" && x.problem === "Power").length;
        let cPower = check.filter( x=>x.problem === "Power").length;
        
        let cLowMedical = check.filter( x=>x.priority === "Low" && x.problem === "Medical").length;
        let cMedMedical = check.filter( x=>x.priority === "Medium" && x.problem === "Medical").length;
        let cHighMedical = check.filter( x=>x.priority === "High" && x.problem === "Medical").length;
        let cCritMedical = check.filter( x=>x.priority === "Critical" && x.problem === "Medical").length;
        let cMedical = check.filter( x=> x.problem === "Medical").length;

        let cLow = check.filter( x=>x.priority === "Low").length;
        let cMed = check.filter( x=>x.priority === "Medium" ).length;
        let cHigh = check.filter( x=>x.priority === "High").length;
        let cCrit = check.filter( x=>x.priority === "Critical").length;
        let cTotal = check.length;

        return (
          <div>
          <br/ >
          <br/ >
          <br/ >
          <div class="header">
          <h2>Analytics</h2>
          </div>
          <br/ >
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Analytics</th>
                  <th>Fire</th>
                  <th>Flood</th>
                  <th>Power</th>
                  <th>Medical</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Low</th>
                  <td>{cLowFire}</td>
                  <td>{cLowFlood}</td>
                  <td>{cLowPower}</td>
                  <td>{cLowMedical}</td>
                  <td>{cLow}</td>
                </tr>
                <tr>
                  <th>Medium</th>
                  <td>{cMedFire}</td>
                  <td>{cMedFlood}</td>
                  <td>{cMedPower}</td>
                  <td>{cMedMedical}</td>
                  <td>{cMed}</td>
                </tr>
                <tr>
                  <th>High</th>
                  <td>{cHighFire}</td>
                  <td>{cHighFlood}</td>
                  <td>{cHighPower}</td>
                  <td>{cHighMedical}</td>
                  <td>{cHigh}</td>
                </tr>
                <tr>
                  <th>Critical</th>
                  <td>{cCritFire}</td>
                  <td>{cCritFlood}</td>
                  <td>{cCritPower}</td>
                  <td>{cCritMedical}</td>
                  <td>{cCrit}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>{cFire}</td>
                  <td>{cFlood}</td>
                  <td>{cPower}</td>
                  <td>{cMedical}</td>
                  <td>{cTotal}</td>
                </tr>
              </tbody>
            </Table>
            </div>
        );
    }
  }  



export default Analytics;