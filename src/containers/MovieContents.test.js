import React from "react";
import { mount, shallow } from 'enzyme';
import MovieElement from '../components/MovieElement';
import MovieElements from '../components/MovieElement';
import { Container } from 'reactstrap';
import MovieContents from './MovieContents';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("MovieContents Render", () => {
    it("shows a list of Movie", async () => {
        const stateDummy = {
            isLoading: false,
            data: {
                pageLoadedNow: 1,
                total_results: 1,
                total_pages: 1,
                results: [
                    {
                        "vote_count": 1490,
                        "id": 287947,
                        "video": false,
                        "vote_average": 7.2,
                        "title": "Shazam!",
                        "popularity": 312.937,
                        "poster_path": "/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
                        "original_language": "en",
                        "original_title": "Shazam!",
                        "genre_ids": [
                            35,
                            12,
                            14,
                            28
                        ],
                        "backdrop_path": "/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg",
                        "adult": false,
                        "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
                        "release_date": "2019-03-23"
                    },
                    {
                        "vote_count": 116,
                        "id": 535167,
                        "video": false,
                        "vote_average": 6.3,
                        "title": "The Wandering Earth",
                        "popularity": 67.512,
                        "poster_path": "/yzqpJcJT79CLTNdZVU7HHee6L3a.jpg",
                        "original_language": "zh",
                        "original_title": "The Wandering Earth",
                        "genre_ids": [
                            878,
                            28,
                            18
                        ],
                        "backdrop_path": "/m5OlkBJZKTlMGJUaxMDINplKBRp.jpg",
                        "adult": false,
                        "overview": "When the Sun begins to expand in such a way that it will inevitably engulf and destroy the Earth in a hundred years, united mankind finds a way to avoid extinction by propelling the planet out of the Solar System using gigantic engines, moving it to a new home located four light years away, an epic journey that will last thousands of years.",
                        "release_date": "2019-02-05"
                    },
                    {
                        "vote_count": 58,
                        "id": 500852,
                        "video": false,
                        "vote_average": 6.5,
                        "title": "Miss Bala",
                        "popularity": 68.052,
                        "poster_path": "/ae9yrSAS7nLZPbbkOm61pSuIqeo.jpg",
                        "original_language": "en",
                        "original_title": "Miss Bala",
                        "genre_ids": [
                            53,
                            28,
                            18
                        ],
                        "backdrop_path": "/5OoR3aVpxXluSCe9P5mhqOa36Gb.jpg",
                        "adult": false,
                        "overview": "Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime. Surviving will require all of her cunning, inventiveness, and strength.",
                        "release_date": "2019-02-01"
                    },
                ],
            },
        }
        const mockFirstLoadFunc = jest.fn();
        MovieContents.prototype.firstLoadData = mockFirstLoadFunc;
        const wrapper = mount(<MovieContents/>);
        wrapper.setState(stateDummy);
        wrapper.update();
        // console.log(wrapper.state());
        // console.log(wrapper.state());
        // console.log(wrapper.state());
        // console.log(wrapper.state());
        expect(wrapper.find(Container)).toHaveLength(1);
        expect(wrapper.find(MovieElement)).toHaveLength(3);
        
    });

    it("check firstloaddata called", async () => {
        const mockFirstLoadFunc = jest.fn();
        MovieContents.prototype.firstLoadData = mockFirstLoadFunc;
        shallow(<MovieContents/>);
        expect(mockFirstLoadFunc).toHaveBeenCalledTimes(1);
    })
});