import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 
import MyForm from "./form" 

const Footer = () => (
<footer class="footer">
  <div class="columns">
    <div class="column is-2">
      <a class="navbar-item" href="/">
        <Image filename="logo.png"></Image>
      </a>
    </div>
    <div class="column is-6">
      <p class="footer-headers">
        <b>RoadMap, connect with your future. </b>
      </p>
      <p class="footer-subheaders">
        By combining student enthusiasm, senior industry experience, and platform reliability, RoadMap brings you high-quality digital product development, as a low-cost.
      </p>
    </div>
    <div class="column is-4">
      <MyForm></MyForm>
    </div>
  </div>
</footer>
)

export default Footer
