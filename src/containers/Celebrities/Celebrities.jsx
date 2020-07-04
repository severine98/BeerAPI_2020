import React, { Component } from "react";
import styles from "./Celebrities.module.scss";
import CardCarousel from "../../components/CardCarousel";
import celebrities from "../../data/celebrities";
import NavBar from "../../components/NavBar";

class Celebrities extends Component {
  state = {};
  render() {
    return (
      <div className={styles.celebritiesPage}>
        <NavBar />
        <h3>My favourite chocolates are CELEBrations, see what I did there?</h3>
        <section className={styles.carousel}>
          <CardCarousel data={celebrities} />
        </section>
        
      </div>
    );
  }
}

export default Celebrities;
