import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"


const Body = () => (
<section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="title is-3 is-spaced">PROJECT PHASING</p>
              <p class="subtitle is-5">Your project is scoped and modularized  into smaller project deliverables.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="title is-3 is-spaced">PROJECT PHASING</p>
              <p class="subtitle is-5">Your project is scoped and modularized  into smaller project deliverables.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="title is-3 is-spaced">PROJECT PHASING</p>
              <p class="subtitle is-5">Your project is scoped and modularized  into smaller project deliverables.</p>
            </div>
          </div>
        </div>
      </div>
      <a class="button is-primary is-rounded">Rounded</a>
    </div>
  </section>
)

export default Body
