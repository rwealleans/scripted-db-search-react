import React, { Component } from 'react';
import firebase from 'firebase';
import './TestCases.css';

class TestCases extends Component {
  constructor(props) {
    super(props);
    this.state = { testCaseElements: [] };
  }

  render() {
    var database = firebase.database();

    // TODO: Uncommen the following cade and update this Firebase database
    // lookup to access the path "/db-search/test-cases".

    
    var testCasesDatabase = database.ref('/db-search/test-cases');
    testCasesDatabase.once('value').then(function(snapshot) {
      var elements = [];
      var testCases = snapshot.val();
      for (var i = 0; i < testCases.length; i++) {
        var testCase = testCases[i];
        var testName = testCase['test-name'];
        var testHint = testCase['test-hint'];
        
        elements.push(
          <div key={i} className="TestCase">
            <b>{testName}</b>
            <b>{testHint}</b>
            <p>TODO: Add more test case items, e.g. test-hint, etc.</p>
          </div>);
      }
      this.setState({ testCaseElements: elements });
    }.bind(this));  // So we can access "this" in the callback above.
    
    
    

    return (
      <div className="TestCases">
        {this.state.testCaseElements}
      </div>
    );
  }
}

export default TestCases;
