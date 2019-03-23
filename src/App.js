import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
// import Middle from './components/Middle/Middle';
import Footer from './components/Footer/Footer';
import Routes from './routes';
import './styles/foundation.min.css';
import './styles/custom.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
appName:'Scholarnet'
  }

}
render() {
    return (
      <div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="title-bar hide-for-large">
<div className="title-bar-left">
<button className="menu-icon" type="button" data-open="my-info"></button>
<span className="title-bar-title">{this.props.name}</span>
</div>
</div>
<div className="off-canvas-content" data-off-canvas-content>
<Header name={this.state.appName} />

<Routes/>
<hr/>
<Footer />
</div>
</div>
</div>

    );
  }
}

export default App;
