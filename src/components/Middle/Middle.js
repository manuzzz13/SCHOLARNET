import React, { Component } from 'react';
import './Middle.css';

class Middle extends Component {
  render() {
    return (
      <div>
        <div className="row small-up-2 medium-up-3 large-up-12">
<div className="column"><center>
<a href ="/Login" className="button">Are you a student?</a>
<a href ="/Login" className="button success">Are you a Sponsor?</a>
</center>
</div>
</div>
      </div>
    );
  }
}

export default Middle;
