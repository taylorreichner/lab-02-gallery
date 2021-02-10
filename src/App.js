import React from 'react';
import './App.css';
import Header from './header.js';
import images from './data.js';
import ImageItem from './sort-image.js';
import ImageList from './image-list.js';


export default class App extends React.Component {
  state = {
    keyword: '',
  }


  render() {
    const filteredImages = images.filter((animals) => {
      if (!this.state.keyword) return true;
      if (animals.keyword === this.state.keyword) return true;
      return false;

    });
    const imagesNodes = filteredImages.map(x => 
      <ImageItem
      key={x.description}
      images={x} />);
      
      return ( 
      <div>
        <Header/>
        <ImageList images={imagesNodes}/>
        
            <form> 
          Animal type
          <select
        value={this.state.keyword}
        onChange={(e) => {
          this.setState({
            keyword: e.target.value
          }) 
          console.log(filteredImages);
        }}
        >
            <option value="dragon">dragon</option>
            <option value="lizard">lizard</option>
            <option value="chameleon">chameleon</option>
            <option value="mouflon">mouflon</option>
            <option value="addax">addax</option>
            <option value="markhor">markhor</option>
            <option value="unicorn">unicorn</option>
            <option value="rhino">rhino</option>
            <option value="narwhal">narwhal</option>
            <option value="triceratops">triceratops</option>
            <option value="unilego">unilego</option>
        </select>
        </form>
              
            
        
        
      </div>
    );
  }
}


