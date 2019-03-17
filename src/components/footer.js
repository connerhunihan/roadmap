import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 
import MyForm from "./form" 

const Footer = () => (
<footer class="footer">
  <div class="columns">
    <div class="column is-3">
      <figure class="image is-5by4">
        <Image filename="white.png"></Image>
      </figure>
    </div>
    <div class="column is-5">
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
