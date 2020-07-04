import React, { Component } from "react";
import styles from "./Skulls.module.scss";
import CardCarousel from "../../components/CardCarousel";
import skulls from "../../data/skulls";
import NavBar from "../../components/NavBar";

class Skulls extends Component {
  state = {};
  render() {
    return (
      <div className={styles.skullPage}>
        <NavBar />
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
