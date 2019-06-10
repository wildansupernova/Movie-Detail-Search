import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';
import MovieElement from '../components/MovieElement';
import MovieElements from '../components/MovieElements';

class MovieContents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                results: [],
                pageLoadedNow: 0,
                total_results: 0,
                total_pages: 0,
            },
            isLoading: true,
        }
        this.renderMovieElement = this.renderMovieElement.bind(this);
        this.nextPageLoadData = this.nextPageLoadData.bind(this);
    }

    firstLoadData() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: {
                api_key: '18ed2ff9145428145807e9613051556c',
                page: 1,
            }
        }).then((response) => {
            this.setState({
               data : {
                   results: response.data.results,
                   pageLoadedNow : 1,
                   total_results: response.data.total_results,
                   total_pages: response.data.total_pages,
               },
               isLoading: false
            });
        });
    }

    nextPageLoadData () {
        console.log("load");
        const { data: { pageLoadedNow } } = this.state;
        // this.setState({data: this.state.data, isLoading: true});
        axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            params: {
                api_key: '18ed2ff9145428145807e9613051556c',
                page: pageLoadedNow + 1,
            }
        }).then((response) => {
            const state = this.state;
            this.setState({
                data : {
                        results: state.data.results.concat(response.data.results),
                        pageLoadedNow : pageLoadedNow + 1,
                        total_results: response.data.total_results,
                        total_pages: response.data.total_pages,
                },
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.firstLoadData();
    }

    renderMovieElement (data) {
        return data.map((el, idx) => {
            return <MovieElement item={el} key={el.id} />
        });
    }

    render() {
        const { data: { pageLoadedNow, total_pages } } = this.state; 
        return (
            <Container>
                <MovieElements
                    pageStart={0}
                    loadMore={this.nextPageLoadData}
                    hasMore={ pageLoadedNow !== total_pages }
                    datamovieresult={this.state.data.results}
                />           
            </Container>
        );
    }
}

  
export default MovieContents;
