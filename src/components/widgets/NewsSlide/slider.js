import React, {Component} from 'react';
import axios from 'axios';
import SliderTemplate from './slider_templates';
import {URL} from '../../../config';

class NewSlider extends Component {
    state = {
        news:[]
    };

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
            .then(response => {
                this.setState({
                    news:response.data  //
                })
            })
    }

    render() {
        //console.log(this.state.news);
        return (
            <div>
                <SliderTemplate
                    data = {this.state.news}
                    type = {this.props.type}
                    settings = { this.props.settings}
                />
            </div>
        )
    }
}

export default NewSlider;