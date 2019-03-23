import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
     <div>
     
<div className="callout primary">
<div className="row column">
<h1>{this.props.name}</h1>
<p className="lead"></p>
</div>
</div>
</div>
     );
  }
}

export default Header;
