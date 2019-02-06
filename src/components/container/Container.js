import React, { Component } from 'react';
import './Container.css';
import WebFont from 'webfontloader';
import ArticleBox from '../ArticleBox/ArticleBox'

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});


class Container extends Component {
  render() {
    return (
      <div>
            <ArticleBox/>,
            <ArticleBox/>,
            <ArticleBox/>
      </div>
    );
  }
}

export default Container;