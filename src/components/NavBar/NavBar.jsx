import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.scss";
import NavBarLinks from "../NavBarLinks";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  showLinks = () => {
    return this.state.isOpen ? <NavBarLinks /> : null;
  };

  render() {
    return (
      <div className={styles.navbar}>
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.icon}
          onClick={this.toggleNav}
        />
        {this.showLinks()}
      </div>
    );
  }
}

export default NavBar;
