import React, { Component } from 'react';
import HeaderBlueSearch from '../components/HeaderBlueSearch';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import Section from '../components/Section';
import MovieElements from '../components/MovieElements';
class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataDetail: {
                title: "",
                release_date: "",
                overview: "",
                poster_path: "",
            },
            dataSimilar: [],
            isLoadingDetail :true,
            isLoadingSimilar :true,
        };
    }

    loadMovieData () {
        const { id } = this.props.match.params;
        axios.get('https://api.themoviedb.org/3/movie/' + id, {
            params: {
                api_key: '18ed2ff9145428145807e9613051556c',
            }
        }).then((response) => {
            const state = this.state;
            this.setState({
                ...state,
                dataDetail: response.data,
                isLoadingDetail: false
            });
        });
    }

    loadMovieSimilar () {
        const { id } = this.props.match.params;
        axios.get('https://api.themoviedb.org/3/movie/' + id + '/similar', {
            params: {
                api_key: '18ed2ff9145428145807e9613051556c',
            }
        }).then((response) => {
            const state = this.state;
            this.setState({
                ...state,
                dataSimilar: response.data.results,
                isLoadingSimilar: false
            });
        });
    }

    componentDidMount() {
        this.loadMovieData();
        this.loadMovieSimilar();
    }

    render() {
        const { dataDetail: { overview, poster_path, title, release_date } } = this.state;
        return (
            <div>
                <HeaderBlueSearch headerText="Detail"/>
                <Container>
                    <Row>
                        <Col sm="3" md="3" xs="12" className="mt-3">
                            <img alt="movie poster" width="100%" src={ poster_path !== null ? "https://image.tmdb.org/t/p/w200" + poster_path : '/notfound.png'}/>
                        </Col>
                        <Col sm="9" md="9" xs="12" className="mt-3">
                            <Row>
                                <Col sm="3" md="3" xs="12" className="font-weight-bold mt-3">
                                    Title
                                </Col>
                                <Col sm="9" md="9" xs="12" className="mt-3">
                                    {title}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3" md="3" xs="12" className=" font-weight-bold mt-3">
                                    Release Year
                                </Col>
                                <Col sm="9" md="9" xs="12" className="mt-3">
                                    {(new Date(release_date)).getFullYear()}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3" md="3" xs="12" className="font-weight-bold mt-3">
                                    Description
                                </Col>
                                <Col sm="9" md="9" xs="12" className="mt-3">
                                    {overview}
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <Section bold marginLeft="0" sectionText="Movie Similar" />
                    <MovieElements
                        pageStart={0}
                        loadMore={ () => {}}
                        hasMore={ false }
                        datamovieresult={this.state.dataSimilar}
                    /> 
                </Container>
            </div>
        );
    }
}
  
export default DetailMovie;
