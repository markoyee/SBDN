import React, { Component } from 'react';
import './ArticleBox.css'
import WebFont from 'webfontloader'
import obrazek from './aa.jpg'



import 'leaflet/dist/leaflet.css';

WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
});


class ArticleBox extends Component {
  render() {
    return (
            <div className="subject">
                <figure>
                  <a href="index.html"> <img src={obrazek} alt={"obrazek"} /></a>
                </figure>
            </div>
    );
  }
}

export default ArticleBox;