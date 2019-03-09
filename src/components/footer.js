import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
<footer class="footer">
  <div class="columns is-vcentered">
    <div class="column is-3 is is-offset-1">
      <div class="columns">
        <div class="column is-3">
          <span>
            <a id="social_icons" class="fab fa-linkedin-in" href="https://linkedin.com/in/connerhunihan"></a>
          </span>
        </div>
        <div class="column is-3">
          <span>
            <a id="social_icons" class="fab fa-instagram" href="https://www.instagram.com/connercticut/"></a>
          </span>
        </div>
        <div class="column is-3">
          <span>
            <a id="social_icons" class="fab fa-github" href="https://github.com/connerhunihan"></a>
          </span>
        </div>
      </div>
    </div>
    <div class="column is-5"></div>
    <div class="column is-2">      
      <div class="content">
        <span>
          <a id="return_to_top" href="#navbar">
            <p class="has-text-right nav-inactive">
              <i class="fas fa-angle-up"/><br/>
            </p>
            <p class="has-text-right nav-inactive">Return to top</p>
          </a>
        </span>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
