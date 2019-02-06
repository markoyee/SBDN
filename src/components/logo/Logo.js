import React, { Component } from 'react';
import './Logo.css'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});


class Logo extends Component {
  render() {
    return (
      <div className='f1 tc'>
          	<div id="logotyp">
				<h1 className="logo"> 
					<span className='f1 blue'> GEO</span>
					<span className='ttc '>Portal </span>
					<span className='f1 blue'> BDN</span>
				</h1>
			</div>
      </div>
    );
  }
}

export default Logo;