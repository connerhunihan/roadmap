import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"


class cards extends React.Component {
  render() {
    return 
    <section class={`section ${this.props.background}`}>
    <div class={`container top-padding bottom-padding`}>
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column is-one-third">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">John Smith</p>
                  </div>
                </div>
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br/>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
            </div>
            <div class="column is-one-third">
            </div>
            <div class="column is-one-third">
            </div>
          </div>
        </div>
      </div>
      <a class="button is-primary is-rounded">Rounded</a>
    </div>
  </section>
}
}

export default cards
