import React from 'react';
import { Card, Col } from 'reactstrap';
import './MovieElement.css';
const MovieElement = (props) => {
    let { 
        item: { 
            poster_path, 
            title, 
            vote_average,
            release_date,
            id
        }
    } = props;
    return (
        <Col sm="2" md="2" xs="12" className="mt-3">
            <Card>
                <a href={'/detail/' + id}>
                    <img width="100%" src={ poster_path !== null ? "https://image.tmdb.org/t/p/w200" + poster_path : '/notfound.png'} alt="Card cap" className="card-img-top"/>
                    <div className="movie-title text-center">
                        <span className="center">{ title }</span>
                    </div>
                    <div className="vote-rate">
                        <i className="font-size-80p text-warning material-icons">star</i>
                        <span className="text-white">{ vote_average }</span>
                    </div>
                    <div className="release-date">
                        <span className="text-white">{ release_date }</span>
                    </div>
                </a>
                
            </Card>
        </Col>
    );
}

export default MovieElement;