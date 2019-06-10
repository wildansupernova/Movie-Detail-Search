import React, { Component } from 'react';
import './MovieElement.css';


import MovieElement from './MovieElement';
import InfiniteScroll from 'react-infinite-scroller';

class MovieElements extends Component {

    renderMovieElement (data) {
        return data.map((el, idx) => {
            return (
                <MovieElement item={el} key={el.id} />
            );
        });
    }

    render() {
        return <InfiniteScroll
            { ...this.props }
            className="row"
        >
            {this.renderMovieElement(this.props.datamovieresult)}
        </InfiniteScroll>;
    }
}

export default MovieElements;