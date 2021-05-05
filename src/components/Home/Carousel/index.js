import React, { Component } from 'react';
import './index.scss';
import { SLIDES } from './constant';
import { Icon } from 'rsuite';
export class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSlide: 1,
      slideType: 'left'
    }
  }

  handleBackSlide = () => {
    const { activeSlide } = this.state;
    if (activeSlide <= 1) {
      this.setState({
        activeSlide: SLIDES.length,
        slideType: 'left'
      })
    } else {
      this.setState({
        activeSlide: activeSlide - 1,
        slideType: 'left'
      })
    }
  }

  handleNextSlide = () => {
    const { activeSlide } = this.state;
    if (activeSlide >= SLIDES.length) {
      this.setState({
        activeSlide: 1,
        slideType: 'right'
      })
    } else {
      this.setState({
        activeSlide: activeSlide + 1,
        slideType: 'right'
      })
    }
  }

  render() {
    const { activeSlide, slideType } = this.state
    return (
      <div className="slideshow-container">
        {SLIDES.map(slide => {
          return (
            < div className={`${activeSlide === slide.slug ? `slides-active-${slideType}` : 'slides-img '}`} >
              <img src={slide.img} />
              <div className="slides-text">
                <div className="container">
                  <div className="slides-text-title">{slide.title}</div>
                  <div className="slides-text-description">{slide.description}</div>
                </div>
              </div>
              <div className="slideshow-btn">
                <div className="slideshow-btn-item" onClick={() => this.handleBackSlide()}>
                  <Icon icon='angle-double-left' />
                </div>
                <div className="slideshow-btn-item" onClick={() => this.handleNextSlide()}>
                  <Icon icon='angle-double-right' />
                </div>
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default Carousel;

