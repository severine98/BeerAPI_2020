import React, { Component } from 'react';
import styles from "./CardCarousel.module.scss";
import Carousel from "react-elastic-carousel";
import Card from "../Card"

class CardCarousel extends Component {
  state = {  }
  render() { 
    return (
    <>
     <Carousel className={styles.carousel}>
       < Card data={this.props.data}/>
       < Card data={this.props.data}/>
       < Card data={this.props.data}/>
      </Carousel>
    </>)
  }
}
 
export default CardCarousel;