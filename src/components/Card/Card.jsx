import React, { Component, Fragment } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
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
        <section className={styles.section}>
          {this.props.data.map(getCard)}
        </section>
      </>
    );
  }
}

export default Card;
