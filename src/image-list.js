import React from 'react';
import ImageItem from './sort-image';

export default class ImageList extends React.Component {
    render() {
        return (
            <ul className="answers">
                {this.props.filteredImages.map(imagesObject =>
                <ImageItem
                    key={imagesObject.title}
                    imagesItemProp={imagesObject}
                />)}
            </ul>
        )    
    }
}