import React, { Component } from 'react'
import propTypes from 'prop-types';

type SlideProps = {
    title: String,
    content: String,
    background_img: String
}

class Slide extends Component<SlideProps>{
    render(){
        return (
            <div className="slide">
                <div className="slide-content">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}


class Slider extends Component {
    state = {
        index: 0,
        slideContent: [
            <Slide title="Title 1" 
                content="fidofohfiodhsifohsdads" 
                background_img=""/>,
            <Slide title="Title 1" 
                content="fidofohfiodhsifohsdads" 
                background_img=""/>,
            <Slide title="Title 1" 
                content="fidofohfiodhsifohsdads" 
                background_img=""/>,
            <Slide title="Title 1" 
                content="fidofohfiodhsifohsdads" 
                background_img=""/>,
            <Slide title="Title 1" 
                content="fidofohfiodhsifohsdads" 
                background_img=""/>,
        ]
    }

    render() {
        return (
            <div className="slider">
                <i className="far fa-arrow-alt-circle-left fa-3x left-btn"></i>
                <i className="far fa-arrow-alt-circle-right fa-3x right-btn"></i>
                <Slide/>
            </div>
        )
    }
}

export default Slider;