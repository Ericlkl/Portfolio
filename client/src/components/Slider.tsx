import React, { Component } from 'react'

type SlideProps = {
    title: String,
    content: String,
    backgroundImage: String
}

class Slide extends Component<SlideProps>{
    render(){
        const { title, content, backgroundImage} = this.props;
        return (
            <div style={{
                backgroundImage: `url(${backgroundImage})`
            }} className="slide">
                <div className="slide-content">
                    <h1>{title}</h1>
                    <p>{content}</p>
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
                backgroundImage="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"/>,
            <Slide title="Title 2" 
                content="fidofohfiodhsifohsdads" 
                backgroundImage="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>,
            <Slide title="Title 3" 
                content="fidofohfiodhsifohsdads" 
                backgroundImage="https://www.economist.com/sites/default/files/20171216_BKP511_0.jpg"/>,
            <Slide title="Title 4" 
                content="fidofohfiodhsifohsdads" 
                backgroundImage="https://vetcarehawthorn.com.au/wp-content/uploads/2019/01/Cat-Into-Catteries.jpg"/>,
        ]
    }

    componentDidMount = () => setInterval( () => this.renderNextSlide("right"), 4000);

    renderNextSlide = (direction: String) => {
        let {index, slideContent} = this.state;
        if (direction === "left") index--;
        else if (direction === "right") index++;

        if (index === slideContent.length) this.setState({ index: 0})
        else if (index === -1 ) this.setState({ index: slideContent.length - 1})
        else this.setState({index});
    }

    render() {
        return (
            <div className="slider">
                <i onClick={() => this.renderNextSlide("left")} className="far fa-arrow-alt-circle-left fa-3x left-btn"></i>
                <i onClick={() => this.renderNextSlide("right")} className="far fa-arrow-alt-circle-right fa-3x right-btn"></i>
                {this.state.slideContent[this.state.index]}
            </div>
        )
    }
}

export default Slider;