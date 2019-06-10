import React, { Component } from 'react';
import HeaderBlueSearch from '../components/HeaderBlueSearch';
import MovieContents from './MovieContents';

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderBlueSearch headerText="Now playing movies"/>
                <MovieContents/>
            </div>
        );
    }
}
  
export default Home;
