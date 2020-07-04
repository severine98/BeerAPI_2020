import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

class Main extends Component {
  state = {};
  render() {
    return (
    <section className={styles.main}>
      <NavBar />
      <div className={styles.text}>
        <h1>Welcome to this random image site!</h1> <br></br>
        <h2>I built this mini project in order to practice using data provided from various APIs. It also allowed me to have a first go at React 
          and using multiple packages, as well as fiddling around with SVGs. </h2> <br></br>
          <p>Enjoy <FontAwesomeIcon icon={faSmile} /></p>
      </div>
    </section>
    )
}
}

export default Main;
