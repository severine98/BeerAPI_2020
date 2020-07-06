import React, { Component } from "react";
import styles from "./Celebrities.module.scss";
import CardCarousel from "../../components/CardCarousel";
import celebrities from "../../data/celebrities";

class Celebrities extends Component {
  render() {
    return (
      <div className={styles.celebritiesPage}>
        <h3>My favourite chocolates are CELEBrations, see what I did there?</h3>
        <section className={styles.carousel}>
          <CardCarousel data={celebrities} />
        </section>
      </div>
    );
  }
}

export default Celebrities;
