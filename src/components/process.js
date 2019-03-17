import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 


const Process = () => (
<section class="section">
    <div class="container lg-top-padding lg-bottom-padding">
          <div class="columns">
            <div class="column is-one-third">
              <figure class="image is-3by1 sm-bottom-padding">
                <Image filename="phase-1.png"></Image>
              </figure>
              <p class="header-3">PROJECT PHASING</p>
              <p class="paragraph">Your project is <b>scoped</b> and <b>modularized</b> into smaller project deliverables.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1 sm-bottom-padding">
                <Image filename="phase-2.png"></Image>
              </figure>
              <p class="header-3">NETWORK OF SKILLS</p>
              <p class="paragraph">Small deliverables mean <b>created by a team:</b> early-career professionals do the work, overseen by senior industry contractors.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1 sm-bottom-padding">
                <Image filename="phase-3.png"></Image>
              </figure>
              <p class="header-3">PLATFORM MANAGEMENT</p>
              <p class="paragraph">RoadMap <b>platform handles management, scheduling, and documentation.</b></p>
            </div>
          </div>
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <a class="button is-large is-primary is-large is-fullwidth is-rounded form-label-headers" href="#getinvolved">Get started</a>
        </div>
      </div>
    </div>
  </section>
)

export default Process
