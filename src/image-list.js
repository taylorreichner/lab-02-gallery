import React from 'react';


export default class ImageList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.images}
            </ul>
            )};
    };
