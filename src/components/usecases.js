import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 


const UseCases = () => (
<section class="section has-background-light">
    <div class="container sm-bottom-padding">
      <nav class="level">
        <p class="level-item has-text-centered sm-bottom-padding">
          <p class="section-header sm-bottom-padding">WHO SHOULD USE ROADMAP</p>
        </p>
      </nav>
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-32x32">
                <Image filename="startup-foudners.png"></Image>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="paragraph-large is-4"><b>Startup Founders</b></p>
                </div>
              </div>
              <div class="paragarph-large content">
                Develop new features and give structure to your product portfolio. 
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-32x32">
                <Image filename="small-business-owners.png"></Image>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="paragraph-large is-4"><b>Small Business Owners</b></p>
                </div>
              </div>
              <div class="paragarph-large content">
                RoadMap works like having a part-time employee who can research, design, develop, and market! 
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-32x32">
                <Image filename="team-lead.png"></Image>
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="paragraph-large is-4"><b>Team Lead</b></p>
                </div>
              </div>
              <div class="paragarph-large content">
                Have an idea for project? Have RoadMap scope, research, and buidl your MVP to show off!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <a class="button is-large is-primary is-large is-fullwidth is-rounded form-label-headers">Get started</a>
        </div>
      </div>
    </div>
  </section>
)

export default UseCases
