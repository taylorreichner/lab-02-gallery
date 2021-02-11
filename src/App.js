import React from 'react';
import './App.css';
import Header from './header.js';
import images from './data.js';
import ImageList from './image-list.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }
  handleAnimalChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  handleHornsChange = (e) => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  render() {
    const filteredImages = images.filter((animals) => {
      if (!this.state.keyword && !this.state.horns) return true;
      
      if (this.state.keyword && !this.state.horns) {
        if (animals.keyword === this.state.keyword) return true;
        }

      if (this.state.horns && !this.state.keyword) {
        if (animals.horns === this.state.horns) return true;
        }
      if (this.state.keyword && this.state.horns) {
        if (animals.horns === this.state.horns && animals.keyword === this.state.keyword) return true;
    }
      
      return false;
});
      return ( 
      <>
        <Header/>
        Animal type
        <Dropdown 
        currentValue={this.state.keyword}
        handleChange={this.handleAnimalChange}
        options={['dragon', 'lizard', 'chameleon', 'mouflon', 'addax', 'markhor', 'unicorn', 'rhino', 'narwhal', 'triceratops', 'unilego']}
        />
        Horns
        <Dropdown
        currentValue={this.state.horns}
        handleChange={this.handleHornsChange}
        options={[1, 2, 3, 100]}
        />
        <ImageList 
        filteredImages={filteredImages}
        />
        
      </>
      
    );
  }
}


