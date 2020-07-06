import React, { Component } from "react";
import styles from "./CardCarousel.module.scss";
import Carousel from "react-elastic-carousel";

class CardCarousel extends Component {

  render() {
    const getCard = (card, index) => {
      return (
        <article className={styles.card} key={index}>
          <img src={card.url} alt="pic" />
        </article>
      );
    };
    return (
      <>
        <Carousel className={styles.carousel} itemsToShow={1}>
        {this.props.data.map(getCard)}
        {this.props.data.map(getCard)}
        {this.props.data.map(getCard)}
          {/* <Card data={this.props.data} /> */}
        </Carousel>
      </>
    );
  }
}

export default CardCarousel;
