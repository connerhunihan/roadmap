import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image" 


const People = () => (
<section class="section">
    <div class="container sm-top-padding lg-bottom-padding">
      <nav class="level">
        <p class="level-item has-text-centered sm-bottom-padding">
          <p class="section-header sm-bottom-padding">WHO IS ROADMAP</p>
        </p>
      </nav>
      <div class="columns">
        <div class="column is-one-third">
          <figure class="image is-3by1 sm-bottom-padding">
            <Image filename="neha_pic.jpg"></Image>
          </figure>
          <p class="paragraph-large"><b>Neha Mittal</b></p>
          <p class="paragraph">Neha's passion in Education Technology goes back to her undergraduate days when she founded a startup focused on bringing IT education to underprivileged children. She worked in the Learning platform space at the Chan Zuckerberg Initiative soon after which is where she identified the advantages of project based learning and the existing gaps between students and Nonprofits.</p>
        </div>
        <div class="column is-one-third">
          <figure class="image is-3by1 sm-bottom-padding">
            <Image filename="mahmoud_pic.jpg"></Image>
          </figure>
          <p class="paragraph-large"><b>Mahmoud Hamsho</b></p>
          <p class="paragraph">hmoud's research interest includes machine learning ethics and cybersecurity. While in the Bay Area, Mahmoud has worked as a Data Scientist at a IoT security startup (Intertrust Technologies). As a researcher for the California Statewide Database, he is conducting user research on redistricting information accessibility and helping design models to lower the barrier to participating in California redistricting.</p>
        </div>
        <div class="column is-one-third">
          <figure class="image is-3by1 sm-bottom-padding">
            <Image filename="conner_pic.jpg"></Image>
          </figure>
          <p class="paragraph-large"><b>Conner Hunihan</b></p>
          <p class="paragraph">User Experience Designer with a passion for connecting dots, Conner thrives working between creative execution and strategic roadmapping. He believes in technology that empowers collaboration, and is interested in blending user research, UI/UX, and service design.</p>
        </div>
      </div>
    </div>
  </section>
)

export default People
