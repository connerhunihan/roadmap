import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

import "./header.css"

const Header = () => (
<nav class="navbar is-transparen" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Image></Image>
    <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navMenu" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="p">
          <a class="nav-text">
            SIGN UP
          </a>
          <a class="nav-text">
            LOG IN
          </a>
        </div>
      </div>
    </div>
  </div>
    </nav>
)

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});


export default Header
