import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"


class modularizeExplanation extends React.Component {
  render() {
    return 
    <section class={`section ${this.props.background}`}>
    <div class={`container top-padding bottom-padding`}>
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="header-3">PROJECT PHASING</p>
              <p class="paragraph">Your project is <b>scoped and modularized</b> into smaller project deliverables.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="header-3">PROJECT PHASING</p>
              <p class="paragraph">Your project is <b>scoped and modularized</b> into smaller project deliverables.</p>
            </div>
            <div class="column is-one-third">
              <figure class="image is-3by1">
                <Image></Image>
              </figure>
              <p class="header-3">PROJECT PHASING</p>
              <p class="paragraph">Your project is <b>scoped and modularized</b> into smaller project deliverables.</p>
            </div>
          </div>
        </div>
      </div>
      <a class="button is-primary is-rounded">Rounded</a>
    </div>
  </section>
}
}

export default modularizeExplanation
