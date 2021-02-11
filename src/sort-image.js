import React from 'react';

export default class ImageItem extends React.Component {
    
    render() {
        return (
            
              <li className="answers">
                  <p>{this.props.imagesItemProp.keyword}</p>
                  <p>{this.props.imagesItemProp.horns}</p>
                  <img className="images" src={this.props.imagesItemProp.url}/>
                  
              </li>
            
        );
    }
}
