import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 

const Hero = () => (
<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div id="hero-container" class="container">
      <div class="columns">
        <div class="column is-4">
          <figure class="image is-3by4 sm-top-padding">
            <Image filename="white.png"></Image>
          </figure>
        </div>
        <div class="column is-8">
          <h1 class="header-1">
            High-touch digital product development.
          </h1>
          <h2 class="header-2">
            RoadMap combines <b>student enthusiasm</b> with <b>senior industry oversight</b>, and platform reliability to deliver high-quality, low-cost digital projects. 
          </h2>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Hero
