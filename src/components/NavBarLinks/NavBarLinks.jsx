import React, { Component } from "react";
import styles from "./NavBarLinks.module.scss";
import { Link } from "@reach/router";

class NavBarLinks extends Component {
  render() {
    return (
      <section className={styles.links}>
        <Link to="/animals">
          <a href="#">Animals</a>
        </Link>
        <Link to="/celebrities">
          <a href="#">Celebrities</a>
        </Link>
        <Link to="/skulls">
          <a href="#">Skulls</a>
        </Link>
      </section>
    );
  }
}

export default NavBarLinks;
