import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            
              <li>
                  <p>{this.props.images.keyword}</p>
                  <img src={this.props.images.url}></img>
                  
              </li>
            
        );
    }
}