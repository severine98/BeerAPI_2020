import React, { Component } from "react";
import styles from "./Skulls.module.scss";
import CardCarousel from "../../components/CardCarousel";
import skulls from "../../data/skulls";

class Skulls extends Component {
  render() {
    return (
      <div className={styles.skullPage}>
        <h3>You know what’s great about being a skull? </h3>
        <p>You don’t need no body</p>
        <section className={styles.carousel}>
          <CardCarousel data={skulls} />
        </section>
      </div>
    );
  }
}

export default Skulls;
